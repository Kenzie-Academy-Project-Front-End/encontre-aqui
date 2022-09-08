import styled from 'styled-components';
import { KeyframeOpacity } from '../Container';

export const StyledHeaderUser = styled.div`
  display: flex;
  width: 100%;
  background: var(--color-dark-blue-2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  animation: ${KeyframeOpacity} 2.5s;
  & > div {
    height: 8.625rem;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  .header__user {
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
      height: 15rem;
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
          background-color: var(--color-orange-1);
        }
      }
    }
  }
`;
