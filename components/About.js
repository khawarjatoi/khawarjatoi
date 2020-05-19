import React from 'react';
import StyledAbout from './styles/About/StyledAbout';

import Skills from './Skills';

const About = ({children}) => {
  return (
    <StyledAbout>
      <section>
        {children}
        <Skills />
      </section>
    </StyledAbout>
  );
};

export default About;
