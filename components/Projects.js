import React, { useRef, createRef } from 'react';
import { gsap, TimelineMax, Power2, CSSPlugin } from 'gsap';

import StyledProjects from './styles/Projects/StyledProjects';
import useWindowDimensions from './utils/useWindowDimensions';

import { projects as data } from '../config';
import ProjectsMobile from './ProjectsMobile';

//  To resolve gsap.registerPlugin CSS issue in production
gsap.registerPlugin(CSSPlugin);

const Projects = (props) => {
  const { height, width } = useWindowDimensions();
  const ul = useRef(null);
  const lis = useRef([]);
  const previews = useRef([]);
  const previewContainer = useRef(null);
  const transitionDiv = useRef(null);
  const seeProject = useRef(null);

  let canSlide = true;
  let slideDown = true;
  let activeProject = 0;
  let previousProject = 0;
  let mouse = {
    x: width / 2,
    y: height / 2,
  };
  let start = {
    x: 0,
    y: 0,
  };
  const count = Object.keys(data).length;

  previews.current = Array(count)
    .fill()
    .map((_, i) => previews.current[i] || createRef());
  //   useEffect(() => {
  //     previews.current = previews.current.slice(0, imgsCount);
  //  }, [imgsCount]);

  const onWheel = (e) => {
    var tl = new TimelineMax();
    if (canSlide) {
      canSlide = false;
      previousProject = activeProject;

      activeProject =
        e.deltaY > 0 ? (activeProject += 1) : (activeProject -= 1);
      slideDown = Math.sign(e.deltaY) === 1 ? true : false;

      // Keep active project in current slide arr
      activeProject = activeProject < 0 ? 0 : activeProject;
      activeProject =
        activeProject > lis.current.length - 1
          ? lis.current.length - 1
          : activeProject;

      if (
        (previousProject === 0 && slideDown === false) ||
        (previousProject === lis.current.length - 1 && slideDown === true)
      ) {
        // We can't slide, reset canslide
        canSlide = true;
      } else {
        // Slide project
        tl.to(ul.current, 1, {
          y: -lis.current[activeProject].offsetTop,
          ease: Power2.easeOut,
          onComplete: () => {
            canSlide = true;
          },
        });

        // Change project color
        tl.to(
          lis.current[activeProject],
          1,
          { color: '#333', ease: Power2.easeInOut },
          0
        );
        tl.to(
          lis.current[previousProject],
          1,
          { color: 'grey', ease: Power2.easeInOut },
          0
        );

        // Change description opacity
        tl.to(
          lis.current[previousProject].children[3],
          1,
          { opacity: 0, ease: Power2.easeInOut },
          0
        );
        tl.to(lis.current[activeProject].children[3], 1, {
          opacity: 1,
          ease: Power2.easeInOut,
        });

        // Change transition div height
        tl.to(
          transitionDiv.current,
          0.5,
          {
            height: '100%',
            ease: Power2.easeInOut,
            onStart: function () {
              if (slideDown) {
                transitionDiv.current.style.bottom = 0;
                transitionDiv.current.style.top = 'auto';
              } else {
                transitionDiv.current.style.top = 0;
                transitionDiv.current.style.bottom = 'auto';
              }
            },
            onComplete: function () {
              if (slideDown) {
                transitionDiv.current.style.top = 0;
                transitionDiv.current.style.bottom = 'auto';
              } else {
                transitionDiv.current.style.bottom = 0;
                transitionDiv.current.style.top = 'auto';
              }
            },
          },
          0
        );

        tl.to(
          transitionDiv.current,
          0.5,
          { height: 0, ease: Power2.easeInOut },
          0.5
        );

        // Select right image
        tl.to(previews.current[activeProject], 0, { display: 'block' }, 0.5);
        tl.to(previews.current[previousProject], 0, { display: 'none' }, 0.5);

        // Select right link
        if (!previews.current[activeProject].getAttribute('link')) {
          previewContainer.current.removeAttribute('href');
          previewContainer.current.removeAttribute('target');
          seeProject.current.innerHTML = '';
        } else {
          previewContainer.current.setAttribute(
            'href',
            previews.current[activeProject].getAttribute('link')
          );
          previewContainer.current.setAttribute('target', '_blank');
          seeProject.current.innerHTML = 'See the project';
        }
      }
    }
  };

  const onMouseMove = (e) => {
    mouse = {
      x: e.clientX - window.innerWidth / 2,
      y: e.clientY - window.innerHeight / 2,
    };

    Object.keys(data).forEach((_, i) => {
      previews.current[i].style.transform = `translate(${mouse.x * 0.05}px, ${
        mouse.y * 0.05
      }px)`;
      previewContainer.current.style.transform = `translate(${
        mouse.x * 0.08
      }px, ${mouse.y * 0.08}px)`;
      seeProject.current.style.left = `${
        e.clientX - previewContainer.current.getBoundingClientRect().left + 20
      }px`;
      seeProject.current.style.top = `${
        e.clientY - previewContainer.current.getBoundingClientRect().top + 10
      }px`;
    });
  };

  const touchStart = (event) => {
    start.x = event.touches[0].pageX;
    start.y = event.touches[0].pageY;
  };

  const touchMove = (event) => {
    event.deltaY = start.y - event.touches[0].pageY;
    onWheel(event);
  };

  return (
    <StyledProjects>
      <div
        className='mainContainer'
        onMouseMove={onMouseMove}
        onWheel={onWheel}
        onTouchStart={touchStart}
        onTouchMove={touchMove}
      >
        <ul
          className='containerr'
          ref={ul}
          style={{ transform: 'matrix(1, 0, 0, 1, 0, 0)' }}
        >
          {data.map((project, i) => {
            const { name, description, keywords, date } = project;
            return (
              <li ref={(li) => (lis.current[i] = li)} key={i}>
                <h2>{name}</h2>
                <p className='technos'>{keywords}</p>
                <p className='date'>{date}</p>
                <p className='description' style={{ opacity: 1 }}>
                  {description.info}
                  <br />
                  <br />
                  {description.detail}
                </p>
              </li>
            );
          })}
        </ul>

        <a
          className='previewContainer'
          ref={previewContainer}
          target='_blank'
          href=''
        >
          <div className='overflowContainer'>
            {data.map((project, i) => {
              const style = !i ? { display: 'block' } : { display: 'none' };
              const { image, link } = project;
              return (
                <img
                  key={i}
                  src={image}
                  link={link}
                  alt=''
                  style={style}
                  ref={(img) => (previews.current[i] = img)}
                />
              );
            })}
          </div>

          <div
            className='transition'
            ref={(div) => (transitionDiv.current = div)}
            style={{ bottom: '0px', top: 'auto', height: '0px' }}
          ></div>
          <div className='seeProject' ref={(div) => (seeProject.current = div)}>
            See The Project
          </div>
        </a>
      </div>
      <ProjectsMobile />
      <span className='scroll'>Scroll</span>
    </StyledProjects>
  );
};

export default Projects;
