import styled from '@emotion/styled';
import { Section } from './ui/Section';
import { FireflyAmbience } from './ui/FireflyAmbience';
import { SCHEDULE } from '../constants/wedding';

const Wrap = styled(Section)`
  background: #f8f5ee;
  padding: 1.4rem 1.4rem 1.6rem;
  display: grid;
  place-items: center;
`;

const Content = styled.div`
  position: relative;
  z-index: 3;
  width: min(100%, 680px);
  max-height: calc(var(--app-height) - 3rem);
  overflow: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar { display: none; }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: .23em;
    font-size: .6rem;
    margin-bottom: .35rem;
  }

  h2 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.6rem, 13vw, 5rem);
    font-weight: 400;
    line-height: .8;
    margin: 0 0 1.5rem;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 1rem;
  padding: .75rem 0;
  border-top: 1px solid rgba(23, 23, 23, .2);

  time { font-family: 'Cormorant Garamond', serif; font-size: 1.15rem; }
  h3 { margin: 0 0 .16rem; font-size: .82rem; font-weight: 600; letter-spacing: .03em; }
  p { margin: 0; font-family: 'Cormorant Garamond', serif; font-size: .88rem; opacity: .68; }
`;

export function ScheduleSection() {
  return (
    <Wrap>
      <FireflyAmbience theme="light" />
      <Content>
        <div className="eyebrow">26 Eylül 2026</div>
        <h2>Düğün Günü<br />Programı</h2>
        {SCHEDULE.map((item) => (
          <Row key={item.time}>
            <time>{item.time}</time>
            <div><h3>{item.title}</h3><p>{item.detail}</p></div>
          </Row>
        ))}
      </Content>
    </Wrap>
  );
}
