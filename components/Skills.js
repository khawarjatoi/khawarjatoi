import React from 'react';
import H from './mdxComponents/Headings'

const Skills = () => {
  return (
    <div className='skills'>
      <H as='h3'>My stack of languages/technologies</H>
      <p className='skills-stack'>
        <span className='skill-tag'>
          <strong>
            <span className='html-clr'>HTML</span>{' '}
            <span className='css-clr'>CSS3</span>
          </strong>
        </span>
        <span className='skill-tag javascript-clr'>
          <strong>Javascript</strong>
        </span>
        <span className='skill-tag styled-clr'>
          <strong>styled-components 💅</strong>
        </span>
        <span className='skill-tag react-clr'>
          <strong>React</strong>
        </span>
        <span className='skill-tag redux-clr'>
          <strong>Redux</strong>
        </span>
        <span className='skill-tag'>
          <strong>Next.js</strong>
        </span>
        <span className='skill-tag php-clr'>
          <strong>PHP</strong>
        </span>
        <span className='skill-tag node-clr'>
          <strong>Node.js</strong>
        </span>
        <span className='skill-tag'>
          <strong>
            Data Query language (<span className='graphql-clr'>GraphQL</span>)
          </strong>
        </span>
        <span className='skill-tag'>
          <strong>
            Relational Databases (<span className='mysql2-clr'>MySQL</span>
            {', '}
            <span className='mariadb-clr'>MariaDB</span>)
          </strong>
        </span>
        <span className='skill-tag'>
          <strong>
            {' '}
            ORMs (<span className='primsa-clr'>Prisma</span>){' '}
          </strong>
        </span>
        <span className='skill-tag'>
          <strong>
            NoSQL Databases (<span className='mongodb-clr'>MongoDB</span>)
          </strong>
        </span>
        <span className='skill-tag'>
          <strong>
            Version Controls (<span className='git-clr'>Git</span>
            {', '}
            <span className='svn-clr'>SVN</span>)
          </strong>
        </span>
        <span className='skill-tag'>
          <strong>...</strong>
        </span>
      </p>
    </div>
  );
};

export default Skills;
