import { useContext } from 'react';
import { ItemContext } from '../../contexts/ItemContext';
import { ThemeButton } from '../../styles/buttons';
import { ThemeTitle } from '../../styles/typography';
import { CardContainer } from './styles';

function Card() {
  const { itens, errorClaim, counter } = useContext(ItemContext);

  return (
    <>
      {itens.map((item, index) =>
        index >= counter && index < counter + 6 ? (
          <CardContainer key={item.id}>
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
              <ThemeButton
                size='small'
                buttonColor='dark-blue'
                onClick={() => errorClaim()}
              >
                Reivindicar
              </ThemeButton>
            </div>
            <section>{item.status === 'lost' ? 'Perdido' : 'Achado'}</section>
          </CardContainer>
        ) : null
      )}
    </>
  );
}

export default Card;
