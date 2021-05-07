// https://codepen.io/_marcba/pen/JjdoGbd
import React from 'react';

import StyledFooter from './styles/Footer/StyledFooter';

const Footer = () => {
  return (
    <StyledFooter>
      <div className='contact'>
        <span className='text'>Made with</span>
        <p className='text-love'>❤️</p>
        <span className='text speedx2'>by Khawar Jatoi © 2021</span>
      </div>
    </StyledFooter>
  );
};

export default Footer;
