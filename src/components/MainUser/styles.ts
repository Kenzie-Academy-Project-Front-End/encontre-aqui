import styled from 'styled-components';

export const StyledMainUser = styled.div`
  width: 100%;
  height: 80vh;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
`;

export const CardListUser = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 750px) {
    justify-content: center;
  }
`;
