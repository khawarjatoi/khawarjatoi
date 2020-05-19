import styled from "styled-components";

const MainSidebar = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 13;
  width: 188px;
  min-height: 100%;
  background: #1e1f26;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  transform: translate(${(props) => (props.isVisible ? 0 : '-100%')});
  transition: transform 400ms ease-in;
  transition: transform 0.4s cubic-bezier(0.38, 0.01, 0.09, 0.98);

  @media (max-width: 750px) {
    width: 120px;
  }
  @media screen and (min-width: 751px) and (max-width: 1024px) {
    width: 140px;
    font-size: 12px;
  }
`;

export default MainSidebar;
