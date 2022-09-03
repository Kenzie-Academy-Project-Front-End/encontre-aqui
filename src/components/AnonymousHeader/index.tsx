import { useNavigate } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import logo from '../../assets/img/logo.svg';
import { StyledAnonymousHeader } from './styles';

function AnonymousHeader() {
  const navigate = useNavigate();

  function pageDirectionRegister() {
    navigate('/register', { replace: true });
  }

  function pageDirectionLogin() {
    navigate('/login', { replace: true });
  }

  return (
    <StyledAnonymousHeader>
      <img src={logo} alt='logomarca Encontre aqui' />
      <div className='nav-bar'>
        <button type='button' onClick={() => pageDirectionRegister()}>
          CADASTRAR
        </button>
        <button type='button' onClick={() => pageDirectionLogin()}>
          LOGIN
        </button>
        <BiUserCircle size={100} />
      </div>
    </StyledAnonymousHeader>
  );
}

export default AnonymousHeader;
