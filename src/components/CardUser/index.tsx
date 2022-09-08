import { useContext } from 'react';
import { ClaimContext } from '../../contexts/ClaimContext';
import { ItemContext } from '../../contexts/ItemContext';
import { UserContext } from '../../contexts/UserContext';
import { ThemeButton } from '../../styles/buttons';
import { ThemeTitle } from '../../styles/typography';
import { StyledCardUser } from './styles';

function CardUser() {
  const { itens, counter } = useContext(ItemContext);
  const { user, claim } = useContext(UserContext);
  const { modalClaim, setModalClaim, setItemId, getDataItem, getDataUser } =
    useContext(ClaimContext);

  return (
    <>
      {itens.map((item, index) =>
        index >= counter && index < counter + 6 ? (
          <StyledCardUser
            key={item.id}
            userLog={item.userId}
            user={user.id}
            claim={claim.some(
              (elem) => String(elem.user_required.item.id) === String(item.id)
            )}
          >
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
              {item.userId === user.id ||
              claim.some(
                (elem) => String(elem.user_required.item.id) === String(item.id)
              ) ? (
                <ThemeButton size='small' buttonColor='dark-blue' disabled>
                  Reivindicar
                </ThemeButton>
              ) : (
                <ThemeButton
                  size='small'
                  buttonColor='dark-blue'
                  onClick={() => {
                    setModalClaim(!modalClaim);
                    setItemId(item.id);
                    getDataItem(item.id);
                    getDataUser(item.userId);

                    // console.log(item.id);
                    // console.log(claim);

                    // console.log(claim[0].user_required.item.id);
                    // // // console.log(user.id);
                    // console.log(
                    //   claim.some(
                    //     (elem) =>
                    //       String(elem.user_required.item.id) === String(item.id)
                    //   )
                    // );
                  }}
                >
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
