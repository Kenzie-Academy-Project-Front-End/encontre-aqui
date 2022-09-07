import styled from 'styled-components';
import { KeyframeOpacity } from '../Container';

export const StyledAnonymousFilter = styled.div`
  width: 100%;
  min-height: 12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  animation: ${KeyframeOpacity} 2.5s;

  .div-filter-buttons {
    width: 50%;
    display: flex;
    gap: 3rem;

    button {
      width: 9.375rem;
      height: 3.125rem;
      font-size: 1.25rem;
      transition: all 0.3s ease;
      position: relative;
      display: inline-block;
      outline: none;
      box-shadow: 0 5px var(--color-orange-2);

      :hover {
        box-shadow: 0 4px var(--color-orange-2);
        top: 1px;
      }

      :active {
        box-shadow: 0 0 var(--color-orange-2);
        top: 5px;
      }
    }
  }

  .div-filter-search {
    width: 35.5rem;
    height: 4.375rem;
    border-radius: 30px 30px;
    background-color: var(--color-white);

    input {
      width: 25.5rem;
      height: 4.375rem;
      font-size: 1.25rem;
      padding: 0 2rem;
      background-color: transparent;
      border: none;
      outline: none;
    }

    button {
      min-width: 9.375rem;
      height: 3.125rem;
      font-size: 1.25rem;
      transition: all 0.3s ease;
      position: relative;
      display: inline-block;
      outline: none;
      box-shadow: 0 5px var(--color-orange-2);

      :hover {
        box-shadow: 0 4px var(--color-orange-2);
        top: 1px;
      }

      :active {
        box-shadow: 0 0 var(--color-orange-2);
        top: 5px;
      }
    }
  }

  @media (max-width: 1200px) {
    min-height: 16rem;
    flex-direction: column-reverse;
    justify-content: center;
    gap: 2rem;

    .div-filter-buttons {
      width: 100%;
      justify-content: center;
    }
  }

  @media (max-width: 610px) {
    min-height: 25rem;

    .div-filter-buttons {
      flex-wrap: wrap;
      gap: 2.5rem;
    }

    .div-filter-search {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      input {
        width: 60%;
      }

      button {
        min-width: 15%;
      }
    }
  }

  @media (max-width: 500px) {
    .div-filter-buttons {
      button {
        font-size: 1rem;
      }
    }

    .div-filter-search {
      button {
        font-size: 1rem;
      }

      input {
        font-size: 1rem;
      }
    }
  }
`;
