import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  font-size: 16px;
  p {
    padding: 8px 0 10px;
  }
  a {
    color: #000000;
    border-bottom: 1px solid black;
    /* :hover {
      text-decoration: underline;
      text-decoration-color: #0070c9;
    } */
  }
  h3 {
    color: #247ba0;
  }
  .skill-tag {
    background-color: #000;
    color: #fff;
    padding: 1px 6px 3px;
    margin-right: 12px;
    margin-bottom: 5px;
    font-size: 16px;
    display: inline-block;
    text-align: center;
    @media (max-width: 830px) {
      /* font-size: 12px; */
      font-size: 14px;
    }
  }
  .skills-stack {
    @media (max-width: 830px) {
      text-align: center;
    }
  }
  .react-clr {
    color: #00d8ff;
  }
  .redux-clr {
    color: #ae95d5;
  }
  .node-clr {
    color: #88bc5b;
  }
  .php-clr {
    color: #787cb4;
  }
  .csharp-clr {
    color: #783295;
  }
  .styled-clr {
    color: #d271ac;
  }
  .html-clr {
    color: #de4b25;
  }
  .css-clr {
    color: #2195f1;
  }
  .javascript-clr {
    color: #f0d91d;
  }
  .graphql-clr {
    color: #e535ab;
  }
  .mysql1-clr {
    color: #006490;
  }
  .mysql2-clr {
    color: #e09000;
  }
  .prisma-clr {
    color: #00344b;
  }
  .mariadb-clr {
    color: #bb7358;
  }
  .mongodb-clr {
    color: #10aa50;
  }
  .git-clr {
    color: #e94e32;
  }
  .svn-clr {
    color: #7c98c3;
  }

  @media (min-width: 831px) {
    margin: 8vh 20vw 8vh 20vw;
  }
  @media (max-width: 830px) {
    margin: 8vh 5vw;
    /* text-align: center; */
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <section>
        <div className="all-about-me">
          <h3>What I'm all about</h3>
          <p>
            I've been passionate and committed developer for more than 3 years
            and have been getting better at programming for most of the time. I
            may not know all the principles and patterns but I usually know how
            to find the things I need.
          </p>
        </div>
        <div className="codinghistory">
          <h3>Coding History:</h3>
          <p>
            I started working as Freelance Desktop Application Developer using{" "}
            <span className="">
              <strong>C#</strong>
            </span>{" "}
            and developed some applications for small enterprises using{" "}
            <a href="https://github.com/thielj/MetroFramework" target="_blank" aria-label="MetroFramework" rel="noreferrer">
              MetroFrameworkUi
            </a>
            {". "}
            These applications features were to keep track of inventory,
            custormers and clients information, generate invoices, bills and
            offer sales reports.
          </p>
          <p>
            I also learned{" "}
            <span className="">
              <strong>PHP</strong>
            </span>{" "}
            whilst working as Desktop Developer.
          </p>
        </div>
        <div className="then">
          <h3>Then:</h3>
          <p>
            Later I got a job as a Remote{" "}
            <span className="">
              <strong>PHP</strong>
            </span>{" "}
            web Devloper. Where I got involved in main project and soon became
            the lead developer along with other developer. We spent two years
            developing a highly complex ERP system.
          </p>
          <p>
            I've also worked on several other projects and have been gaining
            experience with{" "}
            <span className="">
              <strong>Node.js</strong>
            </span>{" "}
            and Express while self-teaching.
          </p>
        </div>
        <div className="now">
          <h3>Now:</h3>
          <p>
            For the last 6 months I've been learning{" "}
            <span className="">
              <strong>React</strong>
            </span>{" "}
            and{" "}
            <span className="">
              <strong>GraphQL</strong>
            </span>{" "}
            and I'm confident to build great apps with{" "}
            <span className="">
              <strong>React</strong>
            </span>
            .
          </p>
          <p>
            I've also contributed a little bit in resolving issues of an open
            source software{" "}
            <a href="https://github.com/audreyt/ethercalc" target="_blank" aria-label="Ethercalc" rel="noreferrer">
              EtherCalc
            </a>
            .
          </p>
        </div>
        <div className="skills">
          <h3>My stack of languages/technologies</h3>
          <p className="skills-stack">
            <span className="skill-tag">
              <strong>
                <span className="html-clr">HTML</span>{" "}
                <span className="css-clr">CSS3</span>
              </strong>
            </span>
            <span className="skill-tag javascript-clr">
              <strong>Javascript</strong>
            </span>
            <span className="skill-tag styled-clr">
              <strong>styled-components 💅</strong>
            </span>
            <span className="skill-tag react-clr">
              <strong>React</strong>
            </span>
            <span className="skill-tag redux-clr">
              <strong>Redux</strong>
            </span>
            <span className="skill-tag">
              <strong>Next.js</strong>
            </span>
            <span className="skill-tag php-clr">
              <strong>PHP</strong>
            </span>
            <span className="skill-tag node-clr">
              <strong>Node.js</strong>
            </span>
            <span className="skill-tag">
              <strong>
                Data Query language (
                <span className="graphql-clr">GraphQL</span>)
              </strong>
            </span>
            <span className="skill-tag">
              <strong>
                Relational Databases (<span className="mysql2-clr">MySQL</span>
                {", "}
                <span className="mariadb-clr">MariaDB</span>)
              </strong>
            </span>
            <span className="skill-tag">
              <strong>
                ORMs (<span className="primsa-clr">Prisma</span>)
              </strong>
            </span>
            <span className="skill-tag">
              <strong>NoSQL Databases (<span className="mongodb-clr">MongoDB</span>)</strong>
            </span>
            <span className="skill-tag">
              <strong>
                Version Controls (<span className="git-clr">Git</span>
                {", "}
                <span className="svn-clr">SVN</span>)
              </strong>
            </span>
            <span className="skill-tag">
              <strong>...</strong>
            </span>
          </p>
        </div>
      </section>
    </AboutContainer>
  );
};

export default About;
