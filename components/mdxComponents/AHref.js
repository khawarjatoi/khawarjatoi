import styled from 'styled-components';

const AStyles = styled.a`
  color: #000000;
  border-bottom: 1px solid black;
`;

export default function AHref(props) {
  return <AStyles {...props} />;
}
