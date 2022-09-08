import styled from 'styled-components';

export const StyledModalClaim = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 1;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);

  .content {
    position: relative;
    width: 100%;
    max-width: 500px;
    background: #08062d;
    border: 5px solid #e88510;
    border-radius: 18px;

    .close {
      cursor: pointer;
      position: absolute;
      top: 5px;
      right: 5px;
      transition: 0.4s;
      &:hover {
        opacity: 1;
      }
    }

    .divForm {
      & > form {
        display: flex;
        padding: 1rem;
        justify-content: space-between;
        flex-direction: column;
        gap: 1rem;

        .title {
          text-align: center;
        }
      }

      .textArea {
        background-color: #ffffff;
        border-radius: 5px;
        height: 30vh;
        width: 100%;
        padding: 1rem;
        font-weight: 300;
        font-size: 20px;
      }
    }

    .buttons {
      display: flex;
      justify-content: center;
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 10rem;
        height: 2.5rem;
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 400px) {
    .content {
      max-width: 290px;
    }
    .header {
      display: flex;
      flex-direction: column-reverse;
    }
  }
`;
