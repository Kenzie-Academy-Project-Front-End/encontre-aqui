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
  }
`;
