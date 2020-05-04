import React, { Component } from 'react';
import StyledIntro from './styles/Intro/StyledIntro';
import Social from './Social';
import Particles from './Particles';

class Intro extends Component {
  toRotate = [
    'solve problems with elegant solutions.',
    'create something from nothing.',
    'know how things work underneath.',
    'learn something new.',
  ];
  period = 2000;
  loopNum = 0;
  period = 2000;
  txt = '';
  isDeleting = false;

  componentDidMount() {
    this.tick();
  }

  tick = () => {
    const i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    if (this.trElement)
      this.trElement.innerHTML = `<span id="wrap"> ${this.txt}</span>`;

    const that = this;
    let delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
    setTimeout(function () {
      that.tick();
    }, delta);
  };

  render() {
    return (
      <>
        <Particles />
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
                ref={(trElement) => (this.trElement = trElement)}
              ></span>
            </p>
            <Social />
          </section>
        </StyledIntro>
      </>
    );
  }
}

export default Intro;
