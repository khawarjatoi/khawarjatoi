import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap'); */
  /* @font-face {
    font-family: '"Raleway", sans-serif';
    src: url(https://fonts.googleapis.com/css?family=Raleway:200,100,400);
    font-weight: normal;
    font-style: normal;
  } */

  /* latin */
  /* @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  } */
  * {
    padding: 0;
    margin: 0;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html,
  body {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    /* font-family: 'Raleway'; */
    /* font-family: 'Montserrat', sans-serif; */
    color: black;
    background-color: white;
    font-size: 18px;
    line-height: 2;
    overflow: hidden;
    @media (max-width: 831px) {
      font-size: 12px;
      line-height: 1.5;
    }
  }

   a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

