import { css, Global } from '@emotion/react';
import { theme } from './theme';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    position: relative;
  }

  body {
    font-family: ${theme.fonts.body};
    color: ${theme.colors.text};
    line-height: 1.5;
    background-color: ${theme.colors.background};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  html {
    scroll-behavior: smooth;
  }
`;

export const GlobalStyles = () => <Global styles={globalStyles} />; 