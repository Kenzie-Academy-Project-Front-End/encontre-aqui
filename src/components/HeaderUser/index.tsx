import { useContext, useEffect } from 'react';
import { StyledHeaderUser } from './styles';
import logo from '../../assets/img/logo.svg';
import { UserContext } from '../../contexts/UserContext';

function HeaderUser() {
  const { userInfo, user, logout, history, setHistory } =
    useContext(UserContext);

  useEffect(() => {
    userInfo();
  }, []);

  return (
    <StyledHeaderUser>
      <img className='logo' src={logo} alt='logomarca Encontre aqui' />
      <div>
        <img className='user-avatar' src={user.avatar} alt='avatar o usuário' />
        <div>
          <button type='button'>Cadastrar item</button>
          {history ? (
            <button type='button' onClick={() => setHistory(false)}>
              Vitrine
            </button>
          ) : (
            <button type='button' onClick={() => setHistory(true)}>
              Histórico
            </button>
          )}
          <button
            type='button'
            onClick={(e) => {
              e.preventDefault();
              logout();
            }}
          >
            Sair
          </button>
        </div>
      </div>
    </StyledHeaderUser>
  );
}

export default HeaderUser;
