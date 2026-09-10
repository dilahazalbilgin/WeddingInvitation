import styled from '@emotion/styled';
import { Section } from './ui/Section';
import { FireflyAmbience } from './ui/FireflyAmbience';
import { useCountdown } from '../hooks/useCountdown';
import { WEDDING_DATE } from '../constants/wedding';

const countdownImage = `${import.meta.env.BASE_URL}images/countdown-couple.jpg`;

const Wrap = styled(Section)`
  display: grid;
  place-items: center;
  background: #171717;
  color: white;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(rgba(0, 0, 0, .38), rgba(0, 0, 0, .38)),
      url('${countdownImage}') center 35% / cover no-repeat;
    filter: grayscale(1);
    pointer-events: none;
  }
`;

const Counter = styled.div`
  position: relative;
  z-index: 3;
  width: min(92%, 680px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  text-shadow: 0 2px 16px rgba(0, 0, 0, .35);

  strong {
    display: block;
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2rem, 11vw, 4rem);
    font-weight: 400;
    font-variant-numeric: tabular-nums;
  }

  span {
    display: block;
    margin-top: .1rem;
    font-size: clamp(.55rem, 2.4vw, .75rem);
    letter-spacing: .15em;
    text-transform: uppercase;
  }
`;

export function CountdownSection() {
  const time = useCountdown(WEDDING_DATE);
  const items = [
    ['Gün', time.days],
    ['Saat', time.hours],
    ['Dakika', time.minutes],
    ['Saniye', time.seconds],
  ];

  return (
    <Wrap aria-label="Düğüne kalan süre">
      <FireflyAmbience theme="dark" />
      <Counter>
        {items.map(([label, value]) => (
          <div key={label}>
            <strong>{String(value).padStart(2, '0')}</strong>
            <span>{label}</span>
          </div>
        ))}
      </Counter>
    </Wrap>
  );
}
