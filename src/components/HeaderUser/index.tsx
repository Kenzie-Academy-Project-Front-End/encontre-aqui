import { useContext, useEffect } from 'react';
import { StyledHeaderUser } from './styles';
import logo from '../../assets/img/logo.svg';
import { UserContext } from '../../contexts/UserContext';
import { Container } from '../Container';

function HeaderUser() {
  const { userInfo, user, logout } = useContext(UserContext);

  useEffect(() => {
    userInfo();
  }, []);

  return (
    <StyledHeaderUser>
      <Container>
        <img className='logo' src={logo} alt='logomarca Encontre aqui' />
        <div className='header__user'>
          <img
            className='user-avatar'
            src={user.avatar}
            alt='avatar o usuário'
          />
          <div>
            <button type='button'>Cadastrar item</button>
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
      </Container>
    </StyledHeaderUser>
  );
}

export default HeaderUser;
