import styled from 'styled-components';

export const ErrorsDiv = styled.div`
  color: red;
  font-size: smaller;
`;

export const ContainerModal = styled.div`
  position: fixed;
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  inset: 0;
`;

export const ModalBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  margin-top: 10px;
  margin-bottom: 10px;

  form {
    gap: 2.7px;
  }

  .title-and-button {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  #btnCloseModal {
    border: none;
    background: transparent;

    justify-self: flex-end;
    display: flex;

    margin-left: 110px;
    margin-bottom: 0px;
    margin-top: 0;

    cursor: pointer;
  }

  input {
    padding: 5px 15px;
  }

  p {
    align-self: center;
    height: 35px;
    margin-left: 110px;
    font-size: 135%;
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

  button {
    margin: 7px 0 13px 0;
    height: 38px;
  }

  @media screen and (max-width: 495px) {
    p {
      height: fit-content;
      margin-left: 29px;
    }

    #btnCloseModal {
      display: flex;
      margin-left: 14%;
      height: 25px;
    }

    label {
      font-size: 110%;
    }

    input {
      padding: 5px 15px;
    }

    button {
      margin: 10px 0 15px 0;
    }
  }

  @media screen and (max-width: 525px) {
    form {
      min-width: unset;
      width: 90%;
      padding-bottom: unset;
    }
  }
`;
