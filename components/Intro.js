// Packages
import React, { useEffect, useRef } from 'react';
// Styles
import StyledIntro from './styles/Intro/StyledIntro';
// Components
import Social from './Social';
// import Particles from './Particles';
// utils
import tick from './utils/toRotateText';

const Intro = () => {

  const trElement = useRef(null);

  useEffect(() => {
    tick(trElement);
  }, []);

  return (
    <>
      {/* <Particles /> */}
      <StyledIntro>
        <section>
          <p>DRIVEN BY PASSION & CURIOUS BY NATURE</p>
          <h1>
            Hi, I'm <span className='colored-name'>Khawar Jatoi</span>
          </h1>
          <p>
            A fullstack web developer who loves to
            <span
              className='txt-rotate'
              ref={trElement}
            ></span>
          </p>
          <Social />
        </section>
      </StyledIntro>
    </>
  );
}

export default Intro;
