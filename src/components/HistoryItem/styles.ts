import styled from 'styled-components';

export const StyledHistoryItem = styled.li`
  width: 100%;
  min-height: 3.125rem;
  border-radius: 10px;
  background-color: var(--color-white);

  details {
    width: 100%;
    padding: 1rem;

    summary {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      margin-bottom: 1rem;
      gap: 1rem;

      svg {
        min-width: 30px;
        min-height: 30px;
      }

      p {
        font-size: 20px;
        font-weight: bold;

        span {
          color: var(--color-orange);
        }
      }

      @media (max-width: 500px) {
        p {
          text-align: justify;
        }
      }
    }

    div {
      width: 100%;
      min-height: 10rem;
      border-radius: 1.25rem;
      display: flex;
      align-items: center;
      margin: 0 auto;
      gap: 1rem;
      border: 3px solid var(--color-dark-blue-2);
      background-color: var(--color-white);

      img {
        width: 13.438rem;
        height: 13.438rem;
        border-radius: 18px;
      }

      .div-description {
        width: 50%;
        height: 85%;
        max-height: 85%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 2px solid var(--color-white);
        gap: 7%;

        p {
          width: 100%;
          font-size: 1rem;
          text-align: justify;
          word-wrap: break-word;

          span {
            font-weight: bold;
          }
        }
      }

      @media (max-width: 500px) {
        flex-direction: column;

        img {
          margin-top: 1rem;
        }

        .div-description {
          width: 90%;
          height: 40%;
          max-height: 40%;
        }
      }
    }
  }
`;
