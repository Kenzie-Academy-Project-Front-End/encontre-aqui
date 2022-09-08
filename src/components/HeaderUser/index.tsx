import { useContext } from 'react';
import { StyledHeaderUser } from './styles';
import logo from '../../assets/img/logo.svg';
import { UserContext } from '../../contexts/UserContext';
import { Container } from '../Container';
import { ItemContext } from '../../contexts/ItemContext';

function HeaderUser() {
  const { user, logout, history, setHistory } = useContext(UserContext);
  const { setOpenModal } = useContext(ItemContext);

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
            <button type='button' onClick={() => setOpenModal(true)}>
              Cadastrar item
            </button>
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
      </Container>
    </StyledHeaderUser>
  );
}

export default HeaderUser;
