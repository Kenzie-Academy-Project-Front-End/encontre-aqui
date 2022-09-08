import styled, { css } from 'styled-components';

interface ICardCompany {
  isShow: boolean;
}

export const Card = styled.div<ICardCompany>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  min-width: 300px;
  height: ${(props) => (props.isShow ? '725px' : '100px')};

  background: #aa5404;
  border: 1px solid #e88510;
  border-radius: 18px 5px;

  header {
    display: flex;
    justify-content: center;
    width: 100%;
    height: ${(props) => (props.isShow === false ? '100%' : null)};
    padding: 36px;


    

    button {
      width: 40px;
      height: 40px;
      background: transparent;
      border: none;
      position: relative;
      left: 30%;

      .btn-show {
        height: 4px;
        width: 28px;
        border-radius: 50px;
        margin: auto;

        background: var(--color-white);

        ${(props) =>
          props.isShow === false &&
          css`
            &:after {
              content: '';
              position: absolute;
              transform: rotate(90deg);

              height: 4px;
              width: 28px;
              left: 6.5px;

              border-radius: 50px;
              background: var(--color-white);
            }
          `};
      }
    }

    @media screen and (max-width: 800px) {
      justify-content: center;
      button {
        display: none;
      }
    }

    @media screen and (max-width: 373px) {
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  main {
    display: ${(props) => (props.isShow ? 'flex' : 'none')};
  }

  .btn-footer {
    box-sizing: border-box;
    display: flex;
    justify-content: end;
    width: 100%;
    max-width: 1000px;
    padding: 10px 0;
    margin: 0;
    background: transparent;
  }

  @media screen and (max-width: 600px) {
    max-width: 1170px;
  }

  @media screen and (max-width: 826px) {
    height: auto;
  }
`;

export const CardContainer = styled.main`
  display: flex;
  justify-content: center;
  gap: 30px;

  width: 100%;
  max-width: 1000px;
  
  height: 521px;

  padding: 26px;

  background: #b1b0b0;
  border-radius: 20px;

  .card-container-one {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    gap: 20px;

    .card-container-one__header {
      display: flex;
      justify-content: space-around;

      width: 100%;
    }
    .card-container-one__body {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 671px;
      height: 440px;
      padding: 19px 25px;

      background: #d9d9d9;
      border-radius: 18px 5px;
      gap: 50px;

      .container-one {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
        max-width: 225px;

        font-size: 20px;
        line-height: 24px;
        font-weight: 500;

        color: #000000;
        gap: 19px;
        img {
          width: 100%;
          max-width: 225px;
          height: 133px;
          border-radius: 18px 5px;
          border: 1px solid var(--color-gray-1);
        }
        strong {
          font-weight: 300;
        }
        p{
          text-align: center;
        }

        .container-one__status{
          text-transform: uppercase;
        }
      }
      .container-two {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
        max-width: 300px;

        font-size: 20px;
        line-height: 24px;

        color: #000000;
        gap: 20px;

        strong {
          font-weight: bold;
        }
      }

      @media screen and (max-width: 730px) {
        flex-direction: column;
        align-items: center;
        height: auto;
      }
    }
  }

  .card-container-two {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 270px;

    gap: 15px;

    .card-container-two__body {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100%;
      max-width: 270px;
      height: 100%;
      max-height: 420px;

      padding: 19px 25px;

      background: #d9d9d9;
      border-radius: 18px 5px;

      font-size: 20px;
      line-height: 24px;
      font-weight: 300;

      color: #000000;
      gap: 13px;

      strong {
        font-weight: bold;
        text-align: center;
      }

      @media screen and (max-width: 826px) {
        max-width: 671px;
      }
    }
    @media screen and (max-width: 826px) {
      max-width: 671px;
    }
  }

  @media screen and (max-width: 826px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

export const TrashBtn = styled.button<ICardCompany>`
  ${(props) =>
    props.isShow === false &&
    css`
      display: none;
    `}

  width: 95px;
  height: 76.18px;
  background: #1e1d2e;
  border-radius: 18px 5px;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
    opacity: 0.7;
  }

  svg {
    width: 40px;
    height: 40px;
    color: var(--color-white);
  }
`;
