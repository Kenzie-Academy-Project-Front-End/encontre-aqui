import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  width: 100%;

  margin: 2vw auto;
  padding: 0 8rem;
  gap: 1rem;

  img {
    width: 600px;
    height: 600px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    img {
      width: 400px;
      height: 400px;
    }
  }
`;
