import styled from 'styled-components';
import { KeyframeOpacity } from '../../components/Container';

export const StyledUserRegister = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  position: relative;
  animation: ${KeyframeOpacity} 2.5s;

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
    .userIlustration {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: -2;
    }
  }
`;
