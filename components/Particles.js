import React from 'react';
import ReactParticles from 'react-particles-js';

const Particles = ({ children }) => {
  const colorArray = ['#000000', '#74C0C0', '#CE4841', '#F6AA3D'];
  return (
    <>
      <ReactParticles
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 1420.4657549380909,
              },
            },
            color: {
              value: colorArray,
            },
            shape: {
              type: 'triangle',
              stroke: {
                width: 0,
                color: colorArray,
              },
              polygon: {
                // nb_sides: 5,
                enable: true,
                type: 'inside',
              },
            },
            opacity: {
              value: 1.06313181133058181,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 5.83721462448409,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: '#F6AA3D',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      {children}
    </>
  );
};

export default Particles;
