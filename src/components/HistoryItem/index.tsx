import { useContext } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { ItemContext } from '../../contexts/ItemContext';
import { UserContext } from '../../contexts/UserContext';
import { StyledHistoryItem } from './styles';

function HistoryItem() {
  const { itens } = useContext(UserContext);
  const { setCurrentItem, setOpenModalEdit, openModalEdit } =
    useContext(ItemContext);
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
            <div className='edit'>
              <AiOutlineEdit
                size={35}
                onClick={() => {
                  setCurrentItem(item);
                  setOpenModalEdit(!openModalEdit);
                }}
              />
            </div>
          </details>
        </StyledHistoryItem>
      ))}
    </>
  );
}

export default HistoryItem;
