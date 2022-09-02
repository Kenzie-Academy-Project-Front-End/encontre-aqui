import styled from 'styled-components';

export const StyledAnonymousHeader = styled.div`
  width: 100%;
  height: 8.625rem;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  background: var(--color-dark-blue-2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  div {
    width: 40%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 15%;

    button {
      font-size: 1.25rem;
      border: none;
      background-color: transparent;
      color: var(--color-white);
      cursor: pointer;
    }

    svg {
      color: var(--color-gray-1);
    }
  }

  @media (max-width: 890px) {
    height: 13rem;
    flex-direction: column;
    justify-content: center;
    gap: 0.75rem;

    img {
      width: 200px;
      height: 104px;
      min-width: 200px;
      min-height: 104px;
    }

    div {
      flex-direction: column;
      gap: 0.75rem;

      svg {
        display: none;
      }
    }
  }
`;
