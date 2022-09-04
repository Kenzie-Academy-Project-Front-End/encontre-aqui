import { useContext, useEffect } from 'react';
import { StyledHeaderUser } from './styles';
import logo from '../../assets/img/logo.svg';
import { ThemeButton } from '../../styles/buttons';
import { UserContext } from '../../contexts/UserContext';

function HeaderUser() {
  const { userInfo, user, logout } = useContext(UserContext);

  useEffect(() => {
    userInfo();
  }, []);

  return (
    <StyledHeaderUser>
      <div className='div-content'>
        <img src={logo} alt='logomarca Encontre aqui' />
        <ThemeButton size='medium' buttonColor='orange'>
          Cadastrar Item
        </ThemeButton>
      </div>
      <div>
        <img className='user-avatar' src={user.avatar} alt='avatar o usuário' />
        <div>
          <button type='button'>Histórico</button>
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
