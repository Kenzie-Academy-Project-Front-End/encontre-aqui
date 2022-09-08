import { useNavigate } from 'react-router-dom';
import { BiExit } from 'react-icons/bi';
import { useContext } from 'react';
import logo from '../../assets/img/logo.svg';
import { StyledDashboardCompanyHeader, Wrap } from './styles';
import { AdminContext } from '../../contexts/AdminContext';

function DashboardCompanyHeader() {
  const navigate = useNavigate();
  const { setLoginAdmin } = useContext(AdminContext);

  function pageDirection() {
    localStorage.clear();
    setLoginAdmin(false);
    navigate('/admin', { replace: true });
  }

  return (
    <Wrap>
      <StyledDashboardCompanyHeader>
        <img src={logo} alt='logomarca Encontre aqui' />

        <div className='admin-title'>
          <h1 className='admin-title'>Admin</h1>
        </div>

        <div className='nav-bar'>
          <BiExit size={70} onClick={pageDirection} />
        </div>
      </StyledDashboardCompanyHeader>
    </Wrap>
  );
}

export default DashboardCompanyHeader;
