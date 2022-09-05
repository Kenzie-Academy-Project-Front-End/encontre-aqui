import styled from 'styled-components';

export const StyledHistory = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
`;
