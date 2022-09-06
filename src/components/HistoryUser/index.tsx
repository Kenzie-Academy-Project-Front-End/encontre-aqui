import { useContext } from 'react';
import { ClaimContext } from '../../contexts/ClaimContext';
import { ItemContext } from '../../contexts/ItemContext';
import HistoryClaim from '../HistoryClaim';
import HistoryItem from '../HistoryItem';
import ModalDeleteClaim from '../ModalDeleteClaim';
import { ModalEditItem } from '../ModalEditItem';
import { StyledClaim, StyledHistory, StyledItem } from './style';

function HistoryUser() {
  const { modalDeleteClaim } = useContext(ClaimContext);
  const { openModalEdit } = useContext(ItemContext);
  return (
    <StyledHistory>
      <StyledItem>
        <h2>Cadastrados</h2>
        <HistoryItem />
      </StyledItem>
      <StyledClaim>
        <h2>Reivindicados</h2>
        <HistoryClaim />
      </StyledClaim>
      {modalDeleteClaim && <ModalDeleteClaim />}
      {openModalEdit && <ModalEditItem />}
    </StyledHistory>
  );
}

export default HistoryUser;
