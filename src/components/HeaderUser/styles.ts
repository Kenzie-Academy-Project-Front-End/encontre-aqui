import styled from 'styled-components';

export const StyledHeaderUser = styled.div`
  width: 100%;
  height: 8.625rem;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  background: var(--color-dark-blue-2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .div-content {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10rem;

    button {
      font-size: 1.25rem;
      border: none;
      background-color: var(--color-orange);
      color: var(--color-white);
      cursor: pointer;
    }
  }

  div {
    width: 100px;
    height: 100px;
    position: relative;
    display: inline-block;
    cursor: pointer;

    :hover div {
      display: block;
    }

    .user-avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }

    div {
      width: 10rem;
      height: 10rem;
      display: none;
      position: absolute;
      right: 50px;
      z-index: 1;
      border-radius: 10px;
      background-color: var(--color-orange);

      button {
        width: 10rem;
        height: 5rem;
        display: block;
        font-size: 1.25rem;
        color: white;
        border: 1px solid var(--color-orange);
        border-radius: 10px;
        cursor: pointer;
        background-color: transparent;
        transition: 0.5s;

        :hover {
          background-color: #ff8c00;
        }
      }
    }
  }

  @media (max-width: 890px) {
    height: 15rem;
    flex-direction: column-reverse;
    justify-content: center;

    .div-content {
      height: 40%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        display: none;
      }
    }

    div {
      div {
        right: -25px;
      }
    }
  }
`;
