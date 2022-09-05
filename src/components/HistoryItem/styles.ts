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

      p {
        font-size: 20px;
        font-weight: bold;

        span {
          color: var(--color-orange);
        }
      }
    }

    div {
      width: 80%;
      height: 15rem;
      border-radius: 1.25rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 0 auto;
      border: 3px solid var(--color-dark-blue-2);
      background-color: var(--color-white);

      img {
        width: 13.438rem;
        height: 16.625rem;
        border-radius: 18px;
      }

      .div-description {
        width: 60%;
        height: 85%;
        max-height: 85%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 2px solid var(--color-white);
        gap: 7%;

        h2 {
          text-align: center;
          line-height: 2rem;
          font-size: 20px;
          font-weight: bold;
        }

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
    }
  }
`;
