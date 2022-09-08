import styled from 'styled-components';

interface IStyledCardUser {
  user: number;
  userLog: number;
  claim: boolean;
}

export const StyledCardUser = styled.li<IStyledCardUser>`
  width: 33.813rem;
  height: 20.625rem;
  border-radius: 1.25rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 5px solid var(--color-orange);
  position: relative;
  animation: scale-in 1.5s;
  background-color: var(--color-white);
  opacity: ${({ userLog, user, claim }) =>
    userLog === user || claim === true ? 0.5 : 1};

  @keyframes scale-in {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }

  img {
    width: 13.438rem;
    height: 16.625rem;
    border-radius: 10px;
  }

  div {
    width: 50%;
    height: 85%;
    max-height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7%;

    h2 {
      text-align: center;
      line-height: 2rem;
      font-size: 30px;
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

    button {
      width: 15.125rem;
      height: 3.938rem;
      font-size: 1.25rem;
      cursor: ${({ userLog, user, claim }) =>
        userLog === user || claim === true ? 'not-allowed' : 'pointer'};
    }
  }

  section {
    width: fit-content;
    padding: 0 3rem;
    font-size: 20px;
    font-weight: 600;
    border-radius: 30px 30px;
    border: 4px solid var(--color-orange);
    background-color: var(--color-orange);
    color: var(--color-white);
    position: absolute;
    top: -20px;
  }

  @media (max-width: 1200px) {
    width: 20.625rem;
    height: 33.813rem;
    flex-direction: column;
    justify-content: center;

    img {
      width: 11.438rem;
      height: 11.625rem;
      border-radius: 10px;
    }

    div {
      width: 90%;
      height: 50%;
    }
  }
`;
