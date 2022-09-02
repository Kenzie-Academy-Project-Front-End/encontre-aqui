import styled from 'styled-components';

export const StyledLandingPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  gap: 3rem;
  width: 65%;

  .buttons {
    display: flex;
    text-align: center;
    flex-direction: row;
    min-width: 50%;
    margin-top: 1rem;
    gap: 1.5rem;
  }

  @media (max-width: 600px) {
    h3 {
      display: none;
    }
    .buttons {
      flex-direction: column;
    }
  }

  @media (max-width: 1000px) {
    margin: 1vw auto;
    width: 100%;
    align-items: center;

    figure {
      display: none;
    }

    h1 {
      font-size: 2.5rem;
      line-height: 48px;
    }

    h3 {
      font-size: 1.25rem;
      line-height: 36px;
    }

    .buttons {
      .button {
        font-size: 1.563rem;
        width: 170px;
        height: 54px;
        padding: 2px 5px;
      }
    }
  }

  @media (min-width: 1440px) {
    width: 50%;

    h1 {
      font-size: 5rem;
      line-height: 97px;
    }

    h3 {
      font-size: 1.875rem;
      line-height: 36px;
    }

    .buttons {
      gap: 2.5rem;

      button {
        width: 250px;
        height: 70px;
      }
    }
  }
`;
