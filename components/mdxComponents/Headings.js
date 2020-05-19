import styled from 'styled-components';

const HStyles = styled.h1`
  color: #247ba0;
`;

export default function H(props) {
  return (
    <HStyles {...props} />
  );
};
