import styled from 'styled-components';

const StyledAbout = styled.div`
  font-size: 16px;
  p {
    padding: 8px 0 10px;
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

export default StyledAbout;
