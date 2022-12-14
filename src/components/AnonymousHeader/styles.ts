import styled from 'styled-components';
import { KeyframeOpacity } from '../Container';

export const StyledAnonymousHeader = styled.div`
  display: flex;
  width: 100%;
  background: var(--color-dark-blue-2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  animation: ${KeyframeOpacity} 2.5s;
  & > div {
    height: 8.625rem;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  .nav-bar {
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
      color: var(--color-white);
    }
  }

  @media (max-width: 890px) {
    & > div {
      height: 13rem;
      flex-direction: column;
      justify-content: center;
      gap: 0.75rem;
    }

    img {
      width: 200px;
      height: 104px;
      min-width: 200px;
      min-height: 104px;
    }

    .nav-bar {
      flex-direction: column;
      gap: 0.75rem;

      svg {
        display: none;
      }
    }
  }
`;
