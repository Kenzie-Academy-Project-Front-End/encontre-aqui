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

  .content {
    position: relative;
    padding: 3rem;
    width: 100%;
    height: 90vh;
    max-width: 600px;
    background: #08062d;
    border: 5px solid #e88510;
    border-radius: 18px;

    .title {
      margin-top: 1rem;
      text-align: center;
    }

    .close {
      cursor: pointer;
      position: absolute;
      top: 2rem;
      right: 2rem;
      transition: 0.4s;
      &:hover {
        opacity: 1;
      }
    }

    .divForm {
      margin: 1.5rem 0;

      .textArea {
        background-color: #ffffff;
        border-radius: 5px;
        height: 45vh;
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

    @media (max-width: 400px) {
      .header {
        display: flex;
        flex-direction: column-reverse;
      }

      .close {
        position: unset;
        display: flex;
        justify-content: end;
      }
    }
  }
`;
