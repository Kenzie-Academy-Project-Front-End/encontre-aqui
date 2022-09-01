import styled from 'styled-components';

export const StyledRegisterUser = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  /* justify-content: center; */
  gap: 1.5rem;
  align-items: center;

  .logo {
    display: flex;
    width: 250px;
  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
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

  @media (min-width: 1280px) {
    .imageBackground {
      position: fixed;
      right: 0;
      bottom: 0;
      z-index: -1;
    }
  }
`;
