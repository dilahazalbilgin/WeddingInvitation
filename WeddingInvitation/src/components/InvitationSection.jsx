import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Section } from './ui/Section';
import { FireflyAmbience } from './ui/FireflyAmbience';
import { WEDDING } from '../constants/wedding';

const invitationImage = `${import.meta.env.BASE_URL}images/gallery-1.jpeg`;

const Wrap = styled(Section)`
  background: #f8f5ee;
  display: grid;
  align-items: center;
  padding: clamp(1.3rem, 5vw, 2rem);
`;

const Card = styled.div`
  position: relative;
  z-index: 3;
  width: min(100%, 720px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr);
  gap: clamp(1rem, 4vw, 2rem);
  align-items: center;

  @media (max-width: 620px) {
    grid-template-columns: 42% 1fr;
    gap: .95rem;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: min(64vh, 500px);

  @supports (height: 100dvh) {
    height: min(64dvh, 500px);
  }

  object-fit: cover;
  filter: grayscale(1);
  border: 1px solid #171717;
`;

const Copy = styled.div`
  h2 {
    font-family: 'Great Vibes', cursive;
    font-weight: 400;
    font-size: clamp(2rem, 8vw, 3rem);
    line-height: .95;
    margin: 0 0 1rem;
  }

  p {
    font-family: 'Cormorant Garamond', serif;
    margin: 0 0 .9rem;
    font-size: clamp(.82rem, 3vw, 1rem);
    line-height: 1.45;
  }

  .date { font-weight: 600; }
  .address { opacity: .68; }
`;

const LinkButton = styled.a`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: .85rem .95rem;
  background: #171717;
  color: #fff;
  text-decoration: none;
  font-size: .64rem;
  font-weight: 500;
  letter-spacing: .1em;
  text-transform: uppercase;
  -webkit-tap-highlight-color: transparent;

  &:focus-visible { outline: none; }
`;

export function InvitationSection() {
  return (
    <Wrap>
      <FireflyAmbience theme="light" />
      <Card>
        <Photo src={invitationImage} alt="Deniz ve Çağlasu düğün fotoğrafı" />
        <Copy>
          <h2>Düğünümüze Davetlisiniz.</h2>
          <p>Hayatlarımızı birleştirdiğimiz bu özel günde mutluluğumuzu sizinle paylaşmak, en güzel anılarımızdan birini birlikte yazmak istiyoruz.</p>
          <p className="date">{WEDDING.dateLongLabel}</p>
          <p className="address">{WEDDING.locationName}<br />{WEDDING.address}</p>
          <LinkButton href={WEDDING.directionsUrl} target="_blank" rel="noreferrer">Yol Tarifi Al</LinkButton>
        </Copy>
      </Card>
    </Wrap>
  );
}
