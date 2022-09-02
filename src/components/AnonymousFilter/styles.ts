import styled from 'styled-components';

export const StyledAnonymousFilter = styled.div`
  width: 100%;
  min-height: 12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .div-filter-buttons {
    width: 50%;
    display: flex;
    gap: 3rem;

    button {
      width: 9.375rem;
      height: 3.125rem;
      font-size: 1.25rem;
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
