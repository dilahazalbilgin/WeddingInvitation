import styled from '@emotion/styled';

export const Section = styled.section`
  width: 100%;
  height: var(--app-height);
  flex: 0 0 var(--app-height);
  scroll-snap-align: start;
  scroll-snap-stop: always;
  position: relative;
  overflow: hidden;
`;
