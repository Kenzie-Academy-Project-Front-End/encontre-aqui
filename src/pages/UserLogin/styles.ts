import styled from 'styled-components';

export const StyledUserLogin = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  position: relative;

  .logo {
    display: flex;
    width: 278px;
  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }

  .divPassword {
    align-items: center;
    justify-content: end;
    display: flex;
  }

  #password {
    width: 100%;
  }

  #btnPassword {
    height: 20px;
    position: absolute;
    display: flex;
    margin-right: 10px;
    border: none;
    background: transparent;
  }

  .buttons {
    display: flex;
    min-width: 100%;
    flex-direction: column;
    text-align: center;
    margin-top: 1rem;
    gap: 16px;
    & > p {
      margin-top: 30px;
    }
  }

  #btn_register {
    font-size: x-large;
    font-weight: none;
    border: none;
    margin: unset;

    background: transparent;
    color: #1f04c3;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }
  }

  #loginIlustration {
    position: absolute;
    width: 32%;
    top: 500px;
    margin-left: 37.2%;
  }

  @media screen and (max-width: 425px) {
    #loginIlustration {
      margin-left: 34.5%;
    }
  }

  @media screen and (max-width: 520px) {
    width: 100%;
    align-items: center;

    form {
      min-width: unset;
    }

    #loginIlustration {
    }
  }

  @media screen and (max-width: 1160px) {
    form {
      padding-bottom: unset;
    }

    #loginIlustration {
      position: unset;
      width: 72%;
      margin-left: 33%;
    }
  }
`;
