import styled from '@emotion/styled';
import { HeroSection } from './components/HeroSection';
import { InvitationSection } from './components/InvitationSection';
import { CountdownSection } from './components/CountdownSection';
import { ScheduleSection } from './components/ScheduleSection';
import { RsvpSection } from './components/RsvpSection';
import { BackgroundMusic } from './components/BackgroundMusic';

const SnapContainer = styled.main`
  width: 100%;
  height: var(--app-height);
  overflow-x: hidden;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  overscroll-behavior-y: contain;
  touch-action: pan-y;
`;

export default function App() {
  return (
    <>
      <BackgroundMusic />
      <SnapContainer>
        <HeroSection />
        <InvitationSection />
        <CountdownSection />
        <ScheduleSection />
        <RsvpSection />
      </SnapContainer>
    </>
  );
}
