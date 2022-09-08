import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem;
`;

export const KeyframeOpacity = keyframes`
  0% { opacity: 0 }
  100% {opacity: 1 }
`;

export const KeyframeScale = keyframes`
 0% { transform: scale(0.5) }
 100% { transform: scale(1) }
`;
