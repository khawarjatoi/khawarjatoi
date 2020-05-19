import React from 'react';

import {projects as data} from '../config';

const ProjectsMobile = () => {
  return (
    <ul className='mobile'>
      {data.map((project, i) => {
        const {name, keywords, data, description} = project;
        return (
          <li key={i}>
        <h2>{name}</h2>
        <p className='technos'>{keywords}</p>
        <p className='date'>{data}</p>
        <p className='description' style={{ opacity: 1 }}>
          {description.info}
          <br />
          <br />
          {description.detail}
        </p>
      </li>
        )
      })}
    </ul>
  );
}

export default ProjectsMobile
