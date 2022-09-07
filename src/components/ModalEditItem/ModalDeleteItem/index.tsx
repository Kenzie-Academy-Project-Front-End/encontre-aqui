import { useContext } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { ItemContext } from '../../../contexts/ItemContext';
import { ThemeButton } from '../../../styles/buttons';
import { ThemeTitle } from '../../../styles/typography';
import { StyledModalDeleteClaim } from './styles';

export function ModalDeleteItem() {
  const { deleteItem, openModalDeleteItem, setOpenModalDeleteItem } =
    useContext(ItemContext);

  return (
    <StyledModalDeleteClaim>
      <div>
        <ThemeButton
          size='close'
          buttonColor='false'
          onClick={() => setOpenModalDeleteItem(!openModalDeleteItem)}
        >
          <VscChromeClose size={25} />
        </ThemeButton>
        <ThemeTitle className='' tag='h3' titleSize='title3' color='black'>
          Tem certeza ?
        </ThemeTitle>
        <span className='div-buttons'>
          <ThemeButton
            size='small'
            buttonColor='dark-blue'
            onClick={() => setOpenModalDeleteItem(!openModalDeleteItem)}
            type='button'
          >
            Voltar
          </ThemeButton>
          <ThemeButton
            className='button-delete'
            size='small'
            buttonColor='dark-blue'
            onClick={() => deleteItem()}
            type='button'
          >
            Excluir
          </ThemeButton>
        </span>
      </div>
    </StyledModalDeleteClaim>
  );
}
