import { useNavigate } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import logo from '../../assets/img/logo.svg';
import { StyledAnonymousHeader } from './styles';

function AnonymousHeader() {
  const navigate = useNavigate();

  function pageDirection() {
    navigate('/register', { replace: true });
  }

  return (
    <StyledAnonymousHeader>
      <img src={logo} alt='logomarca Encontre aqui' />
      <div className='nav-bar'>
        <button type='button' onClick={() => pageDirection()}>
          CADASTRAR
        </button>
        <button type='button' onClick={() => pageDirection()}>
          LOGIN
        </button>
        <BiUserCircle size={100} />
      </div>
    </StyledAnonymousHeader>
  );
}

export default AnonymousHeader;
