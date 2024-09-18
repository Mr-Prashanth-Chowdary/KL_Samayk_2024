import { createGlobalStyle } from 'styled-components';

export const calsans = {
  className: 'font-calsans',
};

// Add this to your global CSS or styled-components
export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Calsans';
    src: url('/path-to-font/calsans.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  .font-calsans {
    font-family: 'Calsans', sans-serif;
  }
`;