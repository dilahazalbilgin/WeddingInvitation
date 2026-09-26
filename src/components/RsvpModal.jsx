import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Button } from './ui/Button';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';
import { sendRsvp } from '../services/rsvpService';

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: grid;
  place-items: end center;
  background: rgba(0, 0, 0, 0.48);
  padding: 1rem;

  @media (min-width: 640px) {
    place-items: center;
  }
`;

const Modal = styled.div`
  width: min(100%, 430px);
  background: #fbf8f1;
  color: #171717;
  border: 1px solid #171717;
  padding: 1.25rem;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.16);

  h3 {
    margin: 0 0 0.25rem;
    color: #171717;
    font-family: 'Cormorant Garamond', serif;
    font-size: 2rem;
    font-weight: 500;
  }

  p {
    margin: 0 0 1rem;
    color: rgba(23, 23, 23, 0.78);
    font-size: 0.84rem;
    line-height: 1.55;
  }

  label {
    display: block;
    color: #171717;
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 0.35rem;
  }

  input {
    width: 100%;
    border: 1px solid rgba(23, 23, 23, 0.35);
    background: #ffffff;
    color: #171717;
    padding: 0.8rem;
    outline: none;
  }

  input::placeholder {
    color: rgba(23, 23, 23, 0.45);
  }

  input:focus {
    border-color: #171717;
  }

  .field + .field {
    margin-top: 0.9rem;
  }

  .actions {
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 0.65rem;
    margin-top: 1rem;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .feedback {
    min-height: 1.1rem;
    margin-top: 0.7rem;
    color: #171717;
    font-size: 0.72rem;
  }
`;

const titles = {
  attending: 'Katılımınızı Onaylayın',
  notAttending: 'Katılamayacağınızı Bildirin',
  unsure: 'Durumunuzu Bildirin',
};

export function RsvpModal({ status, onClose }) {
  useLockBodyScroll(Boolean(status));
  const [fullName, setFullName] = useState('');
  const [guestCount, setGuestCount] = useState('1');
  const [state, setState] = useState({ loading: false, message: '', error: false });

  useEffect(() => {
    setFullName('');
    setGuestCount('1');
    setState({ loading: false, message: '', error: false });
  }, [status]);

  if (!status) return null;

  const handleGuestCountChange = (event) => {
    const digitsOnly = event.target.value.replace(/\D/g, '');
    const normalized = digitsOnly.replace(/^0+(?=\d)/, '');

    if (normalized === '') {
      setGuestCount('');
      return;
    }

    setGuestCount(String(Math.min(Number(normalized), 20)));
  };

  const handleGuestCountBlur = () => {
    if (!guestCount || Number(guestCount) < 1) {
      setGuestCount('1');
    }
  };

  const submit = async (event) => {
    event.preventDefault();
    if (!fullName.trim()) {
      return setState({ loading: false, message: 'Lütfen ad soyad girin.', error: true });
    }

    const normalizedGuestCount = Number(guestCount || 1);

    if (status === 'attending' && normalizedGuestCount < 1) {
      return setState({ loading: false, message: 'Katılımcı sayısı en az 1 olmalı.', error: true });
    }

    try {
      setState({ loading: true, message: '', error: false });
      await sendRsvp({
        status,
        fullName: fullName.trim(),
        guestCount: status === 'attending' ? normalizedGuestCount : undefined,
      });
      setState({ loading: false, message: 'Teşekkürler, yanıtınız iletildi.', error: false });
    } catch (error) {
      setState({
        loading: false,
        message: error.message || 'Gönderim sırasında bir hata oluştu.',
        error: true,
      });
    }
  };

  return (
    <Backdrop onMouseDown={(e) => e.target === e.currentTarget && onClose()} role="presentation">
      <Modal role="dialog" aria-modal="true" aria-labelledby="attendance-title">
        <h3 id="attendance-title">{titles[status]}</h3>
        <p>Yanıtınızı bize iletmek için aşağıdaki bilgileri doldurun.</p>
        <form onSubmit={submit}>
          <div className="field">
            <label htmlFor="full-name">Ad Soyad</label>
            <input
              id="full-name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              autoComplete="name"
              placeholder="Adınızı ve soyadınızı yazın"
              autoFocus
            />
          </div>
          {status === 'attending' && (
            <div className="field">
              <label htmlFor="guest-count">Kaç Kişi Katılacaksınız? (Sen Dahil)</label>
              <input
                id="guest-count"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                autoComplete="off"
                maxLength={2}
                value={guestCount}
                onChange={handleGuestCountChange}
                onBlur={handleGuestCountBlur}
                aria-describedby="guest-count-hint"
              />
              <span id="guest-count-hint" className="sr-only">1 ile 20 arasında kişi sayısı girin.</span>
            </div>
          )}
          <div className="actions">
            <Button type="button" onClick={onClose}>
              Vazgeç
            </Button>
            <Button variant="filled" type="submit" disabled={state.loading}>
              {state.loading ? 'Gönderiliyor…' : 'Yanıtı Gönder'}
            </Button>
          </div>
          <div className="feedback" role="status" style={{ color: state.error ? '#8b1e1e' : '#171717' }}>
            {state.message}
          </div>
        </form>
      </Modal>
    </Backdrop>
  );
}
