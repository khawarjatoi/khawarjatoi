import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  div.image-outer {
    margin: 2rem 2rem;
  }
  .round-image {
    border-radius: 100%;
    height: 6em;
    width: 6em;
    overflow: hidden;
    position: relative;
    z-index: 1;
    cursor: pointer;
    /* border: 2px solid #ccd5db; */
  }
  a {
    display: block;
    text-decoration: none;
    color: #fff;
    padding: 0.5rem 2rem;
    line-height: 2;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding-bottom: 20px;
    padding-top: 20px;
  }
  a:hover {
    color: #aaa;
  }
`;

export default StyledNav;
