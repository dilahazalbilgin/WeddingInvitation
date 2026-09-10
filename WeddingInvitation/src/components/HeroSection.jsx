import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Section } from './ui/Section';
import { FireflyAmbience } from './ui/FireflyAmbience';
import { WEDDING } from '../constants/wedding';

const heroImage = `${import.meta.env.BASE_URL}images/editorial-couple.jpg`;

const linePulse = keyframes`
  0% {
    transform: scaleY(0);
    transform-origin: top;
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  55% {
    transform: scaleY(1);
    transform-origin: top;
    opacity: 1;
  }

  56% {
    transform-origin: bottom;
  }

  100% {
    transform: scaleY(0);
    transform-origin: bottom;
    opacity: 0;
  }
`;

const hintFade = keyframes`
  0%, 100% {
    opacity: .55;
  }

  50% {
    opacity: 1;
  }
`;

const Hero = styled(Section)`
  background: linear-gradient(rgba(0, 0, 0, .22), rgba(0, 0, 0, .22)), url('${heroImage}') center / cover no-repeat;
  display: grid;
  place-items: center;
  color: white;
  text-align: center;
`;

const Mark = styled.div`
  position: relative;
  z-index: 3;
  text-shadow: 0 2px 20px rgba(0, 0, 0, .26);
  transform: translateY(clamp(2rem, 7vh, 4rem));

  @supports (height: 100dvh) {
    transform: translateY(clamp(2rem, 7dvh, 4rem));
  }

  .initials {
    font-family: 'Great Vibes', cursive;
    font-size: clamp(5.4rem, 26vw, 8.5rem);
    line-height: .78;
    font-weight: 400;
  }

  .couple {
    margin-top: 1rem;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.08rem;
    letter-spacing: .2em;
    text-transform: uppercase;
  }

  .date {
    margin-top: .5rem;
    font-size: .72rem;
    letter-spacing: .22em;
    text-transform: uppercase;
  }
`;

const ScrollHint = styled.button`
  position: absolute;
  z-index: 4;
  left: 50%;
  bottom: calc(1.25rem + env(safe-area-inset-bottom, 0px));
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.65rem;

  padding: 0.75rem 1rem;

  border: 0;
  background: transparent;
  color: white;
  cursor: pointer;

  -webkit-tap-highlight-color: transparent;

  .label {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.68rem;
    font-weight: 500;
    letter-spacing: 0.24em;
    text-transform: uppercase;

    text-shadow: 0 2px 14px rgba(0, 0, 0, 0.55);

    animation: ${hintFade} 2.8s ease-in-out infinite;
  }

  .track {
    position: relative;

    width: 1px;
    height: 46px;

    background: rgba(255, 255, 255, 0.22);

    overflow: hidden;
  }

  .progress {
    position: absolute;
    inset: 0;

    background: rgba(255, 255, 255, 0.95);

    transform: scaleY(0);

    animation: ${linePulse} 2.2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
  }

  &:focus-visible {
    outline: 1px solid rgba(255, 255, 255, 0.9);
    outline-offset: 5px;
    border-radius: 4px;
  }

  @media (hover: hover) {
    &:hover {
      .label {
        opacity: 1;
      }

      .track {
        background: rgba(255, 255, 255, 0.32);
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .label,
    .progress {
      animation: none;
    }

    .label {
      opacity: 0.9;
    }

    .progress {
      transform: scaleY(1);
      opacity: 0.85;
    }
  }
`;

export function HeroSection() {
  const goToNextSection = (event) => {
    const currentSection = event.currentTarget.closest('section');
    const nextSection = currentSection?.nextElementSibling;

    nextSection?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <Hero aria-label="Düğün davetiyesi kapak">
      <FireflyAmbience theme="dark" />
      <Mark>
        <div className="initials">{WEDDING.initials}</div>
        <div className="couple">{WEDDING.couple}</div>
        <div className="date">{WEDDING.dateLabel}</div>
      </Mark>

      <ScrollHint
        type="button"
        onClick={goToNextSection}
        aria-label="Davetiyenin devamını görmek için aşağı kaydır"
      >
        <span className="label">Aşağı Kaydır</span>

        <span className="track" aria-hidden="true">
          <span className="progress" />
        </span>
      </ScrollHint>
    </Hero>
  );
}
