import styled from 'styled-components';
import { KeyframeScale } from '../Container';

export const CardContainer = styled.li`
  width: 33.813rem;
  height: 20.625rem;
  border-radius: 1.25rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 5px solid var(--color-orange);
  background-color: var(--color-white);
  position: relative;
  animation: ${KeyframeScale} 1.5s;

  img {
    width: 13.438rem;
    height: 16.625rem;
    border-radius: 10px;
    transition: all 0.3s;
  }

  &:hover img {
    transform: scale(1.1);
  }

  div {
    width: 50%;
    height: 85%;
    max-height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7%;

    h2 {
      text-align: center;
      line-height: 2rem;
      font-size: 30px;
      font-weight: bold;
    }

    p {
      width: 100%;
      font-size: 1rem;
      text-align: justify;
      word-wrap: break-word;

      span {
        font-weight: bold;
      }
    }

    button {
      width: 15.125rem;
      height: 3.938rem;
      font-size: 1.25rem;
    }
  }

  section {
    width: fit-content;
    padding: 0 3rem;
    font-size: 20px;
    font-weight: 600;
    border-radius: 30px 30px;
    border: 4px solid var(--color-orange);
    background-color: var(--color-orange);
    color: var(--color-white);
    position: absolute;
    top: -20px;
  }

  @media (max-width: 1200px) {
    width: 20.625rem;
    height: 33.813rem;
    flex-direction: column;
    justify-content: center;

    img {
      width: 11.438rem;
      height: 11.625rem;
      border-radius: 10px;
    }

    div {
      width: 90%;
      height: 50%;
    }
  }
`;
