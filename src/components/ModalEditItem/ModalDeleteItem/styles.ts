import styled from 'styled-components';

export const StyledModalDeleteClaim = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 3;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  @keyframes scale-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  div {
    position: relative;
    width: 20rem;
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 0.5rem;
    background-color: white;
    padding: 1rem;
    gap: 2rem;
    box-shadow: 0px 0px 28px -2px rgba(170, 84, 4, 0.75);
    animation: scale-in 1s;

    span {
      display: flex;
      gap: 1rem;
      button {
        width: 8rem;
        height: 3.5rem;
        font-size: 1.5rem;
        border: 1px solid transparent;
      }

      .button-delete {
        background-color: #ee3b3b;
      }
    }
  }

  h3 {
    text-align: center;
    font-weight: 600;
    font-size: 1.5rem;
    color: black;
  }

  @media (max-width: 340px) {
    div {
      width: 18rem;
      height: 13rem;
    }
  }
`;
