import styled from 'styled-components';

export const ErrorsDiv = styled.div`
  color: red;
  font-size: smaller;
`;

export const ContainerModal = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  inset: 0;
  align-items: center;
  z-index: 2;
`;

export const ModalBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;

  form {
    position: relative;
    gap: 2.7px;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .buttons {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin-top: 20px;
    gap: 1rem;
  }

  #ItemStatusDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    border: 2px solid var(--color-gray-0);
    border-radius: 4px;
    padding: 8px;
    height: 96px;
    background: rgba(255, 255, 255, 0.7);
  }

  .divFound,
  .divLost {
    display: flex;
    gap: 5px;
  }

  @media screen and (max-width: 495px) {
    label {
      font-size: 110%;
    }
  }

  @media screen and (max-width: 525px) {
    form {
      min-width: unset;
      width: 90%;
    }
  }
`;
