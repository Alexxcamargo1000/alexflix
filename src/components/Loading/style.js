import styled, { keyframes } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
const rotate = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

// eslint-disable-next-line import/prefer-default-export
export const Load = styled.div`
position:absolute;
left: 47%;
top: 40%;

animation: ${rotate} 1s infinite;
  border: 3px solid #fff;
  border-radius: 50%;
  border-top-color: var(--primary);
  height: 50px;
  width: 50px;

`;
