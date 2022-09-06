import { useContext } from 'react';
import { ClaimContext } from '../../contexts/ClaimContext';
import { ThemeButton } from '../../styles/buttons';
import { ThemeTitle } from '../../styles/typography';
import { StyledModalDeleteClaim } from './styles';

function ModalDeleteClaim() {
  const { modalDeleteClaim, setModalDeleteClaim, deleteClaim } =
    useContext(ClaimContext);

  return (
    <StyledModalDeleteClaim>
      <div>
        <ThemeTitle className='' tag='h3' titleSize='title3' color='black'>
          Tem certeza ?
        </ThemeTitle>
        <span className='div-buttons'>
          <ThemeButton
            size='small'
            buttonColor='dark-blue'
            onClick={() => setModalDeleteClaim(!modalDeleteClaim)}
          >
            Voltar
          </ThemeButton>
          <ThemeButton
            className='button-delete'
            size='small'
            buttonColor='dark-blue'
            onClick={() => deleteClaim()}
          >
            Excluir
          </ThemeButton>
        </span>
      </div>
    </StyledModalDeleteClaim>
  );
}

export default ModalDeleteClaim;
