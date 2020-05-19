import styled from 'styled-components';

const StyledScroll = styled.span`
    color: #333;
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
    position: absolute;
    display: inline-block;
    margin: 0;
    z-index: 3;

  .scroll {
    font-size: 10px;
    bottom: 90px;
    right: 33px;
    -webkit-transform: translate(18px, -100%) rotate(90deg);
    transform: translate(18px, -100%) rotate(90deg);
  }
  @media screen and (max-width: 750px) {
    .scroll {
      display: none;
    }
  }
  .scroll:after {
    content: '';
    display: block;
    height: 1px;
    background-color: #333;
    position: absolute;
    top: 50%;
    -webkit-animation: slideDown 3s ease-in-out infinite;
    animation: slideDown 3s ease-in-out infinite;
  }
`;

export default StyledScroll;
