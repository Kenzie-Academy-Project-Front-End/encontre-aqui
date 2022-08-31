import styled, { css } from 'styled-components';
import { BaseTitle } from './components/BaseTitle';

interface IThemeTitleProps {
  titleSize: string;
  color: string;
}

export const ThemeTitle = styled(BaseTitle)<IThemeTitleProps>`
  font-weight: 400;
  ${(props) => {
    switch (props.titleSize) {
      case 'title1':
        return css`
          font-size: 26px;
          line-height: 34px;
        `;
      case 'title2':
        return css`
          font-size: 40px;
          line-height: 48px;
        `;
      case 'title3':
        return css`
          font-size: 18px;
          line-height: 24px;
        `;
      case 'title4':
        return css`
          font-size: 14px;
          line-height: 24px;
        `;
      default:
        return false;
    }
  }}

  ${(props) => {
    switch (props.color) {
      case 'black':
        return css`
          color: var(--color-black);
        `;
      case 'white':
        return css`
          color: var(--color-white);
        `;
      default:
        return false;
    }
  }}
`;
