import { useContext, useEffect } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { UserContext } from '../../contexts/UserContext';
import { StyledHistoryItem } from './styles';

function HistoryItem() {
  const { itens, listUserItens } = useContext(UserContext);

  useEffect(() => {
    listUserItens();
  }, []);

  return (
    <>
      {itens.map((item) => (
        <StyledHistoryItem key={item.id}>
          <details>
            <summary>
              <p>
                {item.name}:{' '}
                <span>{item.status === 'lost' ? 'Perdido' : ' Achado'}</span>
              </p>
              <AiOutlineEdit size={35} />
            </summary>
            <div>
              <img src={item.image} alt={item.name} />
              <div className='div-description'>
                <p>
                  <span>Descrição: </span>
                  {item.description}
                </p>
              </div>
            </div>
          </details>
        </StyledHistoryItem>
      ))}
    </>
  );
}

export default HistoryItem;
