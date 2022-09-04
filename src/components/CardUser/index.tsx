import { useContext } from 'react';
import { ItemContext } from '../../contexts/ItemContext';
import { UserContext } from '../../contexts/UserContext';
import { ThemeButton } from '../../styles/buttons';
import { ThemeTitle } from '../../styles/typography';
import { StyledCardUser } from './styles';

function CardUser() {
  const { itens, counter } = useContext(ItemContext);
  const { user } = useContext(UserContext);

  return (
    <>
      {itens.map((item, index) =>
        index >= counter && index < counter + 6 ? (
          <StyledCardUser key={item.id} userLog={item.userId} user={user.id}>
            <img src={item.image} alt='imagem do item' />
            <div>
              <ThemeTitle
                className=''
                tag='h2'
                titleSize='title2'
                color='black'
              >
                {item.name}
              </ThemeTitle>
              <p>
                <span>Descrição: </span>
                {item.description}
              </p>
              {item.userId === user.id ? (
                <ThemeButton size='small' buttonColor='dark-blue' disabled>
                  Reivindicar
                </ThemeButton>
              ) : (
                <ThemeButton size='small' buttonColor='dark-blue'>
                  Reivindicar
                </ThemeButton>
              )}
            </div>
            <section>{item.status === 'lost' ? 'Perdido' : 'Achado'}</section>
          </StyledCardUser>
        ) : null
      )}
    </>
  );
}

export default CardUser;
