import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const drift = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  28% {
    transform: translate3d(var(--x1), var(--y1), 0);
  }
  56% {
    transform: translate3d(var(--x2), var(--y2), 0);
  }
  78% {
    transform: translate3d(var(--x3), var(--y3), 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const flicker = keyframes`
  0%, 12%, 100% {
    opacity: .12;
    transform: scale(.72);
  }
  20% {
    opacity: .82;
    transform: scale(1);
  }
  30% {
    opacity: .28;
    transform: scale(.82);
  }
  46% {
    opacity: .96;
    transform: scale(1.08);
  }
  58% {
    opacity: .2;
    transform: scale(.76);
  }
  74% {
    opacity: .68;
    transform: scale(.96);
  }
  88% {
    opacity: .18;
    transform: scale(.78);
  }
`;

const Layer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
  contain: layout paint;

  .firefly {
    position: absolute;
    left: var(--left);
    top: var(--top);
    width: var(--size);
    height: var(--size);
    animation: ${drift} var(--drift-duration) ease-in-out var(--drift-delay) infinite;
    will-change: transform;
  }

  .light {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    animation: ${flicker} var(--glow-duration) ease-in-out var(--glow-delay) infinite;
    will-change: opacity, transform;
  }

  &[data-theme='dark'] .light {
    background: #fff5b8;
    box-shadow:
      0 0 3px rgba(255, 246, 177, .98),
      0 0 9px rgba(242, 196, 91, .82),
      0 0 20px rgba(230, 156, 42, .36);
  }

  &[data-theme='light'] .light {
    background: #9a6718;
    box-shadow:
      0 0 2px rgba(112, 71, 12, .7),
      0 0 7px rgba(191, 126, 27, .42),
      0 0 14px rgba(203, 142, 37, .18);
  }

  @media (prefers-reduced-motion: reduce) {
    .firefly {
      animation: none;
    }

    .light {
      animation: none;
      opacity: .38;
      transform: scale(.85);
    }
  }
`;

const particles = [
  { left: '8%', top: '14%', size: 3, x1: 34, y1: 18, x2: 12, y2: 61, x3: -18, y3: 29, drift: 23, driftDelay: -8, glow: 7.4, glowDelay: -2.1 },
  { left: '22%', top: '72%', size: 2, x1: -28, y1: -22, x2: 18, y2: -54, x3: 42, y3: -18, drift: 27, driftDelay: -15, glow: 8.8, glowDelay: -6.4 },
  { left: '34%', top: '29%', size: 3, x1: 22, y1: -29, x2: 49, y2: 11, x3: 17, y3: 44, drift: 31, driftDelay: -20, glow: 9.1, glowDelay: -4.6 },
  { left: '46%', top: '83%', size: 2, x1: -40, y1: -34, x2: -16, y2: -69, x3: 27, y3: -38, drift: 29, driftDelay: -6, glow: 7.9, glowDelay: -1.7 },
  { left: '59%', top: '17%', size: 2, x1: 29, y1: 26, x2: -8, y2: 56, x3: -36, y3: 18, drift: 25, driftDelay: -12, glow: 8.4, glowDelay: -5.2 },
  { left: '71%', top: '61%', size: 3, x1: -24, y1: 35, x2: -52, y2: 6, x3: -19, y3: -31, drift: 32, driftDelay: -24, glow: 10.2, glowDelay: -7.1 },
  { left: '86%', top: '24%', size: 2, x1: -33, y1: 24, x2: -12, y2: 63, x3: 24, y3: 31, drift: 28, driftDelay: -10, glow: 7.7, glowDelay: -3.8 },
  { left: '91%', top: '78%', size: 3, x1: -41, y1: -20, x2: -63, y2: -57, x3: -27, y3: -76, drift: 34, driftDelay: -27, glow: 9.6, glowDelay: -8.2 },
  { left: '14%', top: '48%', size: 2, x1: 31, y1: -14, x2: 55, y2: 19, x3: 20, y3: 49, drift: 30, driftDelay: -18, glow: 8.1, glowDelay: -4.1 },
  { left: '78%', top: '42%', size: 2, x1: -18, y1: -38, x2: 21, y2: -60, x3: 45, y3: -24, drift: 26, driftDelay: -4, glow: 9.4, glowDelay: -6.6 },
  { left: '40%', top: '9%', size: 2, x1: -26, y1: 25, x2: -55, y2: 46, x3: -22, y3: 67, drift: 33, driftDelay: -22, glow: 8.6, glowDelay: -2.8 },
  { left: '64%', top: '88%', size: 2, x1: 27, y1: -31, x2: 54, y2: -58, x3: 18, y3: -75, drift: 35, driftDelay: -14, glow: 10.5, glowDelay: -7.7 },
  { left: '5%', top: '88%', size: 2, x1: 24, y1: -26, x2: 51, y2: -48, x3: 37, y3: -81, drift: 36, driftDelay: -29, glow: 9.9, glowDelay: -5.9 },
  { left: '52%', top: '52%', size: 2, x1: 38, y1: 13, x2: 14, y2: 45, x3: -28, y3: 23, drift: 28, driftDelay: -17, glow: 7.6, glowDelay: -3.3 },
];

export function FireflyAmbience({ theme = 'dark' }) {
  return (
    <Layer data-theme={theme} aria-hidden="true">
      {particles.map((particle, index) => (
        <span
          className="firefly"
          key={index}
          style={{
            '--left': particle.left,
            '--top': particle.top,
            '--size': `${particle.size}px`,
            '--x1': `${particle.x1}px`,
            '--y1': `${particle.y1}px`,
            '--x2': `${particle.x2}px`,
            '--y2': `${particle.y2}px`,
            '--x3': `${particle.x3}px`,
            '--y3': `${particle.y3}px`,
            '--drift-duration': `${particle.drift}s`,
            '--drift-delay': `${particle.driftDelay}s`,
            '--glow-duration': `${particle.glow}s`,
            '--glow-delay': `${particle.glowDelay}s`,
          }}
        >
          <span className="light" />
        </span>
      ))}
    </Layer>
  );
}
