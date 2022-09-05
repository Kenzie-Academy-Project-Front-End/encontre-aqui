import styled from 'styled-components';

export const StyledHistory = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const StyledItem = styled.ul`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h2 {
    font-size: 1.75rem;
    color: var(--color-white);
  }

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const StyledClaim = styled.ul`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h2 {
    font-size: 1.75rem;
    color: var(--color-white);
  }

  @media (max-width: 1100px) {
    width: 100%;
  }
`;
