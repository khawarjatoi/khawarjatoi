import styled from 'styled-components';

const ToggleButton = styled.button`
  border: 0;
  background: none;

  position: fixed;
  left: 0;
  top: 16px;
  overflow: hidden;
  z-index: 2;
  opacity: 1;
  transform: scale(0.75);
  transform-origin: left center;
  top: 22px;
  left: 188px;
  @media (max-width: 750px) {
    left: 120px;
  }
  @media screen and (min-width: 751px) and (max-width: 1024px) {
    left: 140px;
  }
`;

export default ToggleButton;
