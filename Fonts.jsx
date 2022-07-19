import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
        /* latin */
        @font-face {
          font-family: 'disket_monoregular';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url('./fonts/disket-mono.woff') format('woff');
        }
        /* latin */
        @font-face {
          font-family: "hansonbold";
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url('./fonts/hanson-bold.woff') format('woff');
        }
        `}
  />
);

export default Fonts;
