import styled from 'styled-components';

const ToggleIcon = styled.div`
  width: 36px;
  padding: 18px 8px;
  cursor: pointer;
  border-radius: 4px;
  background: #444857;
  transition: background-color 0.2s ease;
  border-radius: 0 6px 6px 0;

  span.line {
    height: 3px;
    display: block;
    background: #fff;
    margin-bottom: 4px;
    transition-duration: 0.5s;
    transition-delay: 0.5s;
  }

  span.line.line-angle1 {
    width: 8px;
    margin: 0;
    position: absolute;
    top: 14px;
    left: 14px;
    color: red;
    transform: rotate(${props => (props.isVisible ? "-60deg" : "-120deg")});
  }
  span.line.line-angle2 {
    width: 8px;
    margin: 0;
    position: absolute;
    top: 20px;
    left: 14px;
    transform: rotate(${props => (props.isVisible ? "60deg" : "120deg")});
  }
`;

export default ToggleIcon;
