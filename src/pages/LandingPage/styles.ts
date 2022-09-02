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
    flex-direction: column;
    min-width: 50%;
    margin-top: 1rem;
    gap: 1.5rem;
  }

  @media (min-width: 400px) {
    .buttons {
      flex-direction: row;
    }
  }

  @media (max-width: 1000px) {
    margin: 1vw auto;
    width: 90%;
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
`;
