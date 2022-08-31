import styled, { css } from 'styled-components';

interface IThemeButtonProps {
  size: string;
  buttonColor: string;
}

export const ThemeButton = styled.button<IThemeButtonProps>`
  font-weight: 300;
  font-size: 30px;
  line-height: 35px;
  border-radius: 18px 5px;
  color: var(--color-white);
  cursor: pointer;

  ${(props) => {
    switch (props.size) {
      case 'small':
        return css`
          padding: 5px 10px;
        `;
      case 'medium':
        return css`
          padding: 5px 10px;
        `;
      case 'large':
        return css`
          padding: 5px 10px;
        `;
      default:
        return false;
    }
  }}

  ${(props) => {
    switch (props.buttonColor) {
      case 'orange':
        return css`
          background: var(--color-orange);
          border: 2px solid var(--color-orange);

          &:hover {
            background: var(--color-orange);
            border: 2px solid var(--color-orange);
            opacity: 0.8;
          }
        `;
      default:
        return false;
    }
  }}
`;
