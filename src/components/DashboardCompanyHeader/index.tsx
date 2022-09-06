import { useNavigate } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import logo from '../../assets/img/logo.svg';
import { StyledDashboardCompanyHeader, Wrap } from './styles';

function DashboardCompanyHeader() {
  const navigate = useNavigate();

  function pageDirection() {
    navigate('/register', { replace: true });
  }

  return (
    <Wrap>
    <StyledDashboardCompanyHeader>
       <img src={logo} alt='logomarca Encontre aqui' />
      <div className='nav-bar'>
        <BiUserCircle size={100} />
      </div>
    </StyledDashboardCompanyHeader>
    </Wrap>
  );
}

export default DashboardCompanyHeader;
