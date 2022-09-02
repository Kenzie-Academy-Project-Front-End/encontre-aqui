import styled from 'styled-components';

export const ImgLogo = styled.div`
  display: flex;
  width: 250px;
  align-self: center;
  margin-top: 62px;
`;

export const StyledUserLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 600px;

  form {
    padding-top: 50px;
    padding-bottom: 50px;
    margin-top: 40px;
  }

  #formTitle {
    height: 89px;
    font-size: 40px;
    line-height: 48px;

    text-align: center;
    align-self: center;
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

  #registerField {
    display: flex;
    flex-direction: column;
    align-self: center;
    padding-top: 3.25rem;
    gap: 10px;

    font-size: 20px;
    line-height: 24px;
    text-align: center;
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
    height: unset;
    padding-top: 50px;

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
