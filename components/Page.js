import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import {useRouter} from 'next/router';

import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

// import GlobalStyles from "./styles/Page/utils/global";
import theme from './styles/Page/utils/theme';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
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
    font-family: 'Montserrat', sans-serif;
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

const DocScroller = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow-y: hidden;
    /* overflow: auto; */
    @media screen and (max-width: 750px) {
      overflow: auto !important;
    }
`;
const Inner = styled.div`
  /* position: relative; */
  overflow: hidden;
  transition: all 0.3s ease-out;
  /* padding: 0 2rem; */
`;

const Page = (props) => {
  const router = useRouter();
  const styles =
    router.pathname === '/about'
      ? { overflow: 'auto', padding: '0px 2rem' }
      : { overflow: 'hidden' };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <Meta /> */}
      <DocScroller style={styles}>
        <Header />
        <Inner>{props.children}</Inner>
        <Footer />
      </DocScroller>
    </ThemeProvider>
  );
};

export default Page;
