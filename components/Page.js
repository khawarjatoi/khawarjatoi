import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import Meta from "./Meta";
import Header from "./Header";
import Footer from "./Footer";

// import GlobalStyles from "./styles/Page/utils/global";
import theme from "./styles/Page/utils/theme";

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
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  -ms-scroll-snap-type: mandatory;
  scroll-snap-type: mandatory;
  -ms-scroll-snap-destination: 0% 100%;
  scroll-snap-destination: 0% 100%;
  -ms-scroll-snap-points-x: repeat(100%);
  scroll-snap-points-x: repeat(100%);
`;
const Inner = styled.div`
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-out;
  padding: 0 2rem;
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Meta />
        <DocScroller>
          <Header />
          <Inner>{this.props.children}</Inner>
          <Footer />
        </DocScroller>
      </ThemeProvider>
    );
  }
}

export default Page;
