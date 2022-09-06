import styled, { css } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  max-width: 500px;
  padding: 1.5rem 1.5rem;
  border-radius: 20px;
  background: var(--color-gray-1);
  gap: 0.5rem;
  @media (min-width: 520px) {
    max-width: 500px;
    min-width: 500px;
  }
`;

export const ThemeLabel = styled.label`
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: var(--color-black);
`;

export const ThemeErrorForm = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: var(--color-negative);
`;

export const ThemeTextForm = styled.p`
  font-weight: 300;
  font-size: 25px;
  line-height: 30px;
  color: var(--color-black);
`;

interface IThemeInputProps {
  borderColor: string;
}

export const ThemeInput = styled.input<IThemeInputProps>`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: var(--color-black);
  padding: 5px 15px;
  border-radius: 4px;
  background: var(--color-gray-0);
  &:focus {
    outline: 0;
    border: 2px solid var(--color-dark-blue);
  }

  &:hover {
    border: 2px solid var(--color-dark-blue);
  }

  ${(props) => {
    switch (props.borderColor) {
      case 'error':
        return css`
          border: 2px solid var(--color-negative);
        `;
      case 'success':
        return css`
          border: 2px solid var(--color-gray-0);
        `;
      default:
        return false;
    }
  }}
`;
