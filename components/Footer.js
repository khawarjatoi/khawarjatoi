// https://codepen.io/_marcba/pen/JjdoGbd
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  z-index: 1;
  .contact {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    display: inline-block;
    background: #1e1f26;
    padding: 1.2rem 0.5rem;
    border-radius: 3rem;
    display: flex;
    align-items: center;
    transition: all 1.5s ease-in-out;
    height: 20px;
    max-width: 35px;
    cursor: pointer;
    font-size: small;
  }
  .contact:hover {
    max-width: 100%;
  }
  .contact:hover .text {
    max-width: 100%;
    height: auto;
  }
  .contact:hover .text.speedx2 {
    transition: all 1s ease-in-out;
  }
  .contact a {
    transition: all 0.3s ease-in-out;
    color: #1da1f2;
    text-decoration: none;
  }
  .contact a:hover {
    text-shadow: 1px 1px 10px rgba(29, 161, 242, 0.3),
      1px 1px 10px rgba(255, 255, 255, 0.3);
  }
  .contact .text {
    color: #fff;
    white-space: nowrap;
    transition: all 2s ease-in-out;
    max-width: 0;
    overflow: hidden;
    height: 60px;
    line-height: 60px;
  }
  .contact .text.speedx2 {
    transition: all 2s ease-in-out;
  }
  .contact .text-love {
    color: #e74c3c;
    animation-duration: 1s;
    animation-name: heartBeat;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    /* margin: 0 0.5rem; */
    flex-shrink: 0;
    margin-right: 3px;
  }
  @keyframes heartBeat {
    from {
      text-shadow: 0px 0px 15px rgba(255, 80, 80, 0.75),
        1px 1px 10px rgba(255, 255, 255, 0.1);
    }
    to {
      text-shadow: 0;
    }
  }
`;
const Footer = () => {
  return (
    <FooterContainer>
      <div className='contact'>
        <span className='text'>Made with</span>
        <p className='text-love'>❤️</p>
        <span className='text speedx2'>by Khawar Jatoi © 2020</span>
      </div>
    </FooterContainer>
  );
};

export default Footer;
