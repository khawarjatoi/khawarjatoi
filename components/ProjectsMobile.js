import React from 'react';

import { projects as data } from '../config';

const ProjectsMobile = () => {
  return (
    <ul className='mobile'>
      {data.map((project, i) => {
        const { name, keywords, date, description, link } = project;
        return (
          <li key={i}>
            <h2>{name}</h2>
            <p className='technos'>{keywords}</p>
            <p className='date'>{date}</p>
            <p className='description' style={{ opacity: 1 }}>
              {description.info}
              {description.detail && (
                <>
                  <br /> <br />
                </>
              )}
              {description.detail}
              <br />
              <a
                href={link}
                target='_blank'
                aria-label={name}
                rel='noopener noreferrer'
              >
                See the Project
              </a>
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectsMobile;
