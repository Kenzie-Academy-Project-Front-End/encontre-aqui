import { useContext } from 'react';
import DashboardCompanyHeader from '../../components/DashboardCompanyHeader';
import DashboarCompanyMain from '../../components/DashboardCompanyMain';
import { AdminContext } from '../../contexts/AdminContext';

function DashboardCompany() {
  const { loginAdmin, redirectAdminLogin } = useContext(AdminContext);
  function adminDashboardCompany() {
    return (
      <>
        <DashboardCompanyHeader />
        <DashboarCompanyMain />
      </>
    );
  }

  return <>{loginAdmin ? adminDashboardCompany() : redirectAdminLogin()} </>;
}

export default DashboardCompany;
