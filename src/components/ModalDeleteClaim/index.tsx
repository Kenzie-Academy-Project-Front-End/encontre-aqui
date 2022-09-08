import { useContext } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { ClaimContext } from '../../contexts/ClaimContext';
import { outsideClickModalDeleteClaim } from '../../hooks/outsideClickModalDeleteClaim';
import { ThemeButton } from '../../styles/buttons';
import { ThemeTitle } from '../../styles/typography';
import { StyledModalDeleteClaim } from './styles';

function ModalDeleteClaim() {
  const { modalDeleteClaim, setModalDeleteClaim, deleteClaim } =
    useContext(ClaimContext);

  const deleteClaimModal = outsideClickModalDeleteClaim(() => {
    setModalDeleteClaim(!modalDeleteClaim);
  });

  return (
    <StyledModalDeleteClaim>
      <div ref={deleteClaimModal}>
        <ThemeButton
          size='close'
          buttonColor='false'
          onClick={() => setModalDeleteClaim(!modalDeleteClaim)}
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
