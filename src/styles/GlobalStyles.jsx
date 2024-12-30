import { css, Global } from '@emotion/react';
import { theme } from './theme';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #121212;
    color: white;
    font-family: ${theme.fonts.body};
  }

  #root {
    min-height: 100vh;
  }
`;

export const GlobalStyles = () => <Global styles={globalStyles} />; 