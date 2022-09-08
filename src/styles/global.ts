import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-dark-blue: #1E1D2E;
    --color-dark-blue-2: #08062d;
    --color-black: #000000;
    --color-gray-1: #B1B0B0;
    --color-gray-0: #E7E6E6;
    --color-white: #FFFFFF;
    --color-orange: #AA5404;
    --color-orange-1: #FF8C00;
    --color-orange-2: #d2691e;

    --color-sucess: #3FE864;
    --color-negative: #ff002b;
  } 

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  ul, ol {
    list-style: none;
  }

  body {
    background: var(--color-dark-blue);
  };

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
