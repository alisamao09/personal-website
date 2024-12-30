import { css, Global } from '@emotion/react';
import { theme } from './theme';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    background-color: ${theme.colors.background};
  }

  body {
    font-family: ${theme.fonts.body};
    color: ${theme.colors.text};
    line-height: 1.5;
    background-color: #121212;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

export const GlobalStyles = () => <Global styles={globalStyles} />; 