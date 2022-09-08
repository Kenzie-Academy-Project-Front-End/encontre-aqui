import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  justify-content: center;

  height: 8.625rem;
  width: 100%;

  padding: 0 2rem;

  background: var(--color-dark-blue-2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const StyledDashboardCompanyHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1170px;
  height: 8.625rem;

  .admin-title{
    width: 100%;
    max-width: 300px;
    font-size: 40px;
    color: var(--color-gray-1);
  }

  svg {
    color: var(--color-gray-1);
  }

  @media screen and (max-width: 771px) {
    img{
        display: none;
      }
    
  }
`;
