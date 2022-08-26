import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${theme.colors.background};
    font-size: 14px;
    color: #fff;
    font-family: sans-serif;
  }
`;
