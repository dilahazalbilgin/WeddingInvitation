import { useState } from 'react';
import styled from '@emotion/styled';
import { Section } from './ui/Section';
import { FireflyAmbience } from './ui/FireflyAmbience';
import { Button } from './ui/Button';
import { RsvpModal } from './RsvpModal';

const Wrap = styled(Section)`
  background: #171717;
  color: #f8f5ee;
  display: grid;
  place-items: center;
  padding: 1.5rem;
  text-align: center;
`;

const Content = styled.div`
  position: relative;
  z-index: 3;
  width: min(100%, 520px);

  .script {
    font-family: 'Great Vibes', cursive;
    font-size: clamp(3rem, 15vw, 5.5rem);
    line-height: 1;
  }

  h2 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 400;
    font-size: clamp(2rem, 10vw, 3.4rem);
    margin: .35rem 0 .6rem;
  }

  p {
    font-family: 'Cormorant Garamond', serif;
    opacity: .72;
    line-height: 1.55;
    margin: 0 auto 1.4rem;
    max-width: 34ch;
  }
`;

const Choices = styled.div`
  display: grid;
  gap: .65rem;
  width: min(100%, 340px);
  margin: 0 auto;

  button { width: 100%; color: inherit; }
`;

export function RsvpSection() {
  const [status, setStatus] = useState(null);

  return (
    <Wrap>
      <FireflyAmbience theme="dark" />
      <Content>
        <div className="script">Katılım</div>
        <h2>Sizi aramızda görecek miyiz?</h2>
        <p>Hazırlıklarımızı tamamlayabilmemiz için katılım durumunuzu bizimle paylaşmanızı rica ederiz.</p>
        <Choices>
          <Button onClick={() => setStatus('attending')}>Katılacağım</Button>
          <Button onClick={() => setStatus('notAttending')}>Katılmayacağım</Button>
          <Button onClick={() => setStatus('unsure')}>Belirsiz</Button>
        </Choices>
      </Content>
      <RsvpModal status={status} onClose={() => setStatus(null)} />
    </Wrap>
  );
}
