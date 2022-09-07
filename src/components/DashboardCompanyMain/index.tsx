import { useContext } from 'react';
import { RequiredContext } from '../../contexts/RequiredContext';
import CardCompany from '../CardCompany';
import { CardContainer, StyledDashboarCompanyMain } from './styles';

function DashboarCompanyMain() {
  const { requireds } = useContext(RequiredContext);

  return (
    <StyledDashboarCompanyMain>
      {requireds.map((required) => (
        <CardContainer key={required.id}>
          
          <CardCompany
            required={required.user_required}
            applicant={required.user_applicant}
            id={required.id}
          />
        </CardContainer>
      ))}
    </StyledDashboarCompanyMain>
  );
}

export default DashboarCompanyMain;
