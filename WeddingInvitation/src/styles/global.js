import { css } from '@emotion/react';

export const globalStyles = css`
  *, *::before, *::after { box-sizing: border-box; }

  :root {
    /* Legacy fallback. Modern mobile browsers override this with dvh below. */
    --app-height: 100vh;
  }

  @supports (height: 100dvh) {
    :root { --app-height: 100dvh; }
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
  }

  html { scroll-behavior: smooth; }

  body {
    background: #f6f2ea;
    color: #171717;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
  }

  button, input { font: inherit; }
  button { cursor: pointer; }
  a { color: inherit; }
`;
