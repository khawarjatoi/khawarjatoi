import styled from 'styled-components';

const StyledIntro = styled.div`
  section {
    display: grid;
    height: 100vh;
    grid-template-rows: 25% 30px 20% auto;
    text-align: center;
    align-items: center;
    padding: 2rem;
  }
  span#wrap {
    border-right: 0.08em solid #666;
  }
  .colored-name {
    color: #f5f5f5;
    background-color: #333333;
    font-weight: 600;
    padding: 3px;
  }
  p,
  h1,
  h2 {
    margin: 0.4em 0;
  }
  h1 {
    font-weight: 450;
  }
  h2 {
    font-weight: 280;
  }
  p {
    /* font-weight: 600; */
    font-weight: 400;
  }

  section:first-of-type {
    /* padding-top: 25vh; */
  }

  section:first-of-type h1 {
    font-size: 45px;
    /* font-size: 3.5em; */
  }

  section:first-of-type p {
    /* font-size: 25px; */
  }

  section:first-of-type h2 {
    /* font-size: 25px; */
    font-size: 2em;
  }

  @media (max-width: 830px) {
    section:first-of-type {
      /* padding-top: 30vh; */
    }

    section:first-of-type h1 {
      font-size: 30px;
    }

    section:first-of-type h2 {
      font-size: 18px;
    }

    section:first-of-type p {
      font-size: 12px;
    }
  }

  section:nth-of-type(2n) {
    /* background-color: #edf1f5; */
  }
`;

export default StyledIntro;
