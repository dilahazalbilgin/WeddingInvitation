import styled from '@emotion/styled';
import { Section } from './ui/Section';
import { FireflyAmbience } from './ui/FireflyAmbience';
import { WEDDING } from '../constants/wedding';

const invitationImage = `${import.meta.env.BASE_URL}images/2.jpeg`;

/* --------------------------------------------------
   HELPERS
-------------------------------------------------- */

function getDateParts(dateLabel = '') {
  const parts = dateLabel.split(' ');

  return {
    day: parts[0] || '',
    month: (parts[1] || '').replace(',', '').toUpperCase(),
  };
}

function getLocationParts(locationName = '') {
  const parts = locationName.split(' - ');

  return {
    venue: parts[0] || locationName,
    city: parts[1] || '',
  };
}

/* --------------------------------------------------
   SECTION
-------------------------------------------------- */

const Wrap = styled(Section)`
  background:
    radial-gradient(
      circle at 50% 35%,
      rgba(255, 255, 255, 0.7),
      transparent 48%
    ),
    #f7f3ea;

  display: grid;
  place-items: center;

  padding: clamp(1.2rem, 4vw, 2.5rem);

  color: #1d1a16;
`;

/* --------------------------------------------------
   MAIN LAYOUT
-------------------------------------------------- */

const Card = styled.div`
  position: relative;
  z-index: 3;

  width: min(100%, 850px);
  margin: 0 auto;

  display: grid;
  grid-template-columns: minmax(220px, 0.9fr) minmax(320px, 1.15fr);

  gap: clamp(2rem, 5vw, 4.5rem);

  align-items: center;

  @media (max-width: 760px) {
    grid-template-columns: 40% 1fr;
    gap: clamp(1rem, 4vw, 1.8rem);
  }

  @media (max-width: 520px) {
    grid-template-columns: 36% 1fr;
    gap: 0.9rem;
  }
`;

/* --------------------------------------------------
   PHOTO
-------------------------------------------------- */

const PhotoColumn = styled.div`
  min-width: 0;
`;

const PhotoFrame = styled.div`
  position: relative;

  &::after {
    content: '';

    position: absolute;

    top: 11px;
    left: 11px;
    right: -11px;
    bottom: -11px;

    border: 1px solid rgba(179, 147, 98, 0.65);

    pointer-events: none;
    z-index: -1;
  }

  @media (max-width: 520px) {
    &::after {
      top: 6px;
      left: 6px;
      right: -6px;
      bottom: -6px;
    }
  }
`;

const Photo = styled.img`
  position: relative;
  z-index: 1;

  display: block;

  width: 100%;
  height: min(60vh, 500px);

  object-fit: cover;
  object-position: center;

  background: #eee8dd;

  box-shadow:
    0 20px 55px rgba(45, 36, 25, 0.09),
    0 4px 15px rgba(45, 36, 25, 0.05);

  @media (max-width: 760px) {
    height: min(55vh, 460px);
  }

  @media (max-width: 520px) {
    height: min(48vh, 390px);
  }

  @media (max-height: 720px) {
    height: min(52vh, 390px);
  }
`;

const PhotoCaption = styled.div`
  margin-top: 1rem;

  text-align: center;

  color: #9d7d4f;

  .initials {
    display: block;

    font-family: 'Great Vibes', cursive;

    font-size: 1.55rem;
    line-height: 1;

    color: #a98756;
  }

  .dates {
    display: block;

    margin-top: 0.35rem;

    font-family: 'Inter', sans-serif;
    font-size: 0.48rem;
    font-weight: 500;

    letter-spacing: 0.17em;
    text-transform: uppercase;
  }

  @media (max-width: 520px) {
    margin-top: 0.7rem;

    .initials {
      font-size: 1.25rem;
    }

    .dates {
      font-size: 0.4rem;
      letter-spacing: 0.1em;
    }
  }

  @media (max-height: 720px) {
    margin-top: 0.55rem;
  }
`;

/* --------------------------------------------------
   RIGHT SIDE
-------------------------------------------------- */

const Copy = styled.div`
  min-width: 0;
`;

const Eyebrow = styled.div`
  display: flex;
  align-items: center;

  gap: 0.7rem;

  margin-bottom: 0.75rem;

  font-family: 'Inter', sans-serif;

  font-size: 0.54rem;
  font-weight: 600;

  letter-spacing: 0.26em;
  text-transform: uppercase;

  color: #a98756;

  &::before {
    content: '';

    width: 25px;
    height: 1px;

    background: #b39362;

    flex-shrink: 0;
  }

  @media (max-width: 520px) {
    gap: 0.4rem;
    margin-bottom: 0.55rem;

    font-size: 0.4rem;
    letter-spacing: 0.15em;

    &::before {
      width: 14px;
    }
  }
`;

const Title = styled.h2`
  margin: 0;

  font-family: 'Great Vibes', cursive;
  font-weight: 400;

  font-size: clamp(2.8rem, 5.7vw, 4rem);
  line-height: 0.9;

  color: #1d1a16;

  span {
    display: block;
  }

  @media (max-width: 760px) {
    font-size: clamp(2.25rem, 6vw, 3.2rem);
  }

  @media (max-width: 520px) {
    font-size: clamp(1.9rem, 8vw, 2.55rem);
    line-height: 0.92;
  }
`;

const Intro = styled.p`
  max-width: 43ch;

  margin: 1rem 0 1.15rem;

  font-family: 'Cormorant Garamond', serif;

  font-size: clamp(0.85rem, 1.7vw, 1rem);
  line-height: 1.5;

  color: rgba(29, 26, 22, 0.74);

  @media (max-width: 520px) {
    margin: 0.7rem 0;

    font-size: 0.72rem;
    line-height: 1.35;
  }

  @media (max-height: 720px) {
    margin-top: 0.55rem;
    margin-bottom: 0.55rem;

    line-height: 1.35;
  }
`;

/* --------------------------------------------------
   EVENTS
-------------------------------------------------- */

const Events = styled.div`
  border-top: 1px solid rgba(46, 39, 31, 0.12);
`;

const EventGroup = styled.div`
  display: grid;

  grid-template-columns: 60px minmax(0, 1fr);

  gap: 1.15rem;

  padding: 1rem 0;

  border-bottom: 1px solid rgba(46, 39, 31, 0.12);

  @media (max-width: 760px) {
    grid-template-columns: 49px minmax(0, 1fr);

    gap: 0.8rem;

    padding: 0.85rem 0;
  }

  @media (max-width: 520px) {
    grid-template-columns: 39px minmax(0, 1fr);

    gap: 0.55rem;

    padding: 0.65rem 0;
  }

  @media (max-height: 720px) {
    padding-top: 0.55rem;
    padding-bottom: 0.55rem;
  }
`;

const DateBox = styled.div`
  align-self: start;

  padding-top: 0.1rem;

  text-align: center;

  color: #a98756;

  .day {
    display: block;

    font-family: 'Cormorant Garamond', serif;

    font-size: clamp(2.1rem, 4vw, 2.8rem);
    font-weight: 400;

    line-height: 0.8;

    letter-spacing: -0.04em;
  }

  .month {
    display: block;

    margin-top: 0.5rem;

    font-family: 'Inter', sans-serif;

    font-size: 0.46rem;
    font-weight: 600;

    letter-spacing: 0.18em;
  }

  @media (max-width: 520px) {
    .day {
      font-size: 1.65rem;
    }

    .month {
      margin-top: 0.35rem;

      font-size: 0.36rem;

      letter-spacing: 0.1em;
    }
  }
`;

const EventContent = styled.div`
  min-width: 0;

  .city {
    display: block;

    margin-bottom: 0.25rem;

    font-family: 'Inter', sans-serif;

    font-size: 0.48rem;
    font-weight: 600;

    letter-spacing: 0.23em;
    text-transform: uppercase;

    color: #a98756;
  }

  h3 {
    margin: 0 0 0.2rem;

    font-family: 'Cormorant Garamond', serif;

    font-size: clamp(1rem, 2vw, 1.2rem);
    font-weight: 600;

    line-height: 1.1;

    color: #211e19;
  }

  .event-date {
    margin: 0 0 0.4rem;

    font-family: 'Cormorant Garamond', serif;

    font-size: clamp(0.76rem, 1.5vw, 0.88rem);
    font-weight: 500;

    color: rgba(29, 26, 22, 0.82);
  }

  .address {
    max-width: 40ch;

    margin: 0;

    font-family: 'Cormorant Garamond', serif;

    font-size: clamp(0.74rem, 1.45vw, 0.86rem);

    line-height: 1.38;

    color: rgba(29, 26, 22, 0.59);
  }

  @media (max-width: 520px) {
    .city {
      font-size: 0.36rem;
      letter-spacing: 0.14em;
    }

    h3 {
      font-size: 0.82rem;
    }

    .event-date {
      margin-bottom: 0.25rem;

      font-size: 0.64rem;
    }

    .address {
      font-size: 0.6rem;
      line-height: 1.25;
    }
  }
`;

/* --------------------------------------------------
   DIRECTIONS LINK
-------------------------------------------------- */

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;

  gap: 0.5rem;

  width: fit-content;

  margin-top: 0.55rem;
  padding: 0.25rem 0 0.3rem;

  border-bottom: 1px solid rgba(179, 147, 98, 0.8);

  color: #29241e;

  text-decoration: none;

  font-family: 'Inter', sans-serif;

  font-size: 0.53rem;
  font-weight: 600;

  letter-spacing: 0.13em;
  text-transform: uppercase;

  transition:
    gap 180ms ease,
    color 180ms ease,
    border-color 180ms ease;

  -webkit-tap-highlight-color: transparent;

  .arrow {
    color: #a98756;

    font-size: 0.8rem;

    transition: transform 180ms ease;
  }

  &:hover {
    gap: 0.75rem;

    color: #a98756;
    border-color: #a98756;

    .arrow {
      transform: translate(2px, -2px);
    }
  }

  &:focus-visible {
    outline: 1px solid #a98756;
    outline-offset: 4px;
  }

  @media (max-width: 520px) {
    margin-top: 0.35rem;

    font-size: 0.4rem;
    letter-spacing: 0.08em;
  }

  @media (max-height: 720px) {
    margin-top: 0.25rem;
  }
`;

/* --------------------------------------------------
   EVENT COMPONENT
-------------------------------------------------- */

function WeddingEvent({
  date,
  locationName,
  address,
  directionsUrl,
}) {
  const { day, month } = getDateParts(date);
  const { venue, city } = getLocationParts(locationName);

  return (
    <EventGroup>
      <DateBox>
        <span className="day">{day}</span>
        <span className="month">{month}</span>
      </DateBox>

      <EventContent>
        {city ? <span className="city">{city}</span> : null}

        <h3>{venue}</h3>

        <p className="event-date">{date}</p>

        <p className="address">{address}</p>

        <LinkButton
          href={directionsUrl}
          target="_blank"
          rel="noreferrer"
        >
          Yol Tarifi

          <span className="arrow">
            ↗
          </span>
        </LinkButton>
      </EventContent>
    </EventGroup>
  );
}

/* --------------------------------------------------
   INVITATION SECTION
-------------------------------------------------- */

export function InvitationSection() {
  return (
    <Wrap>
      <FireflyAmbience theme="light" />

      <Card>
        <PhotoColumn>
          <PhotoFrame>
            <Photo
              src={invitationImage}
              alt="Dilara ve Berat düğün fotoğrafı"
            />
          </PhotoFrame>

          <PhotoCaption>
            <span className="initials">
              {WEDDING.initials}
            </span>

            <span className="dates">
              {WEDDING.dateLabel} · {WEDDING.dateLabel2}
            </span>
          </PhotoCaption>
        </PhotoColumn>

        <Copy>
          <Eyebrow>
            {WEDDING.couple}
          </Eyebrow>

          <Title>
            <span>Düğünümüze</span>
            <span>Davetlisiniz.</span>
          </Title>

          <Intro>
            Birbirimize verdiğimiz sözü, bizim için en kıymetli olan
            insanların huzurunda kutlamak istiyoruz. Gözlerimizin içine
            bakarak “evet” diyeceğimiz bu anı, kalbi bizimle çarpan
            sizlerle paylaşmak en büyük mutluluğumuz.
          </Intro>

          <Events>
            <WeddingEvent
              date={WEDDING.dateLongLabel1}
              locationName={WEDDING.locationName1}
              address={WEDDING.address1}
              directionsUrl={WEDDING.directionsUrl1}
            />

            <WeddingEvent
              date={WEDDING.dateLongLabel2}
              locationName={WEDDING.locationName2}
              address={WEDDING.address2}
              directionsUrl={WEDDING.directionsUrl2}
            />
          </Events>
        </Copy>
      </Card>
    </Wrap>
  );
}