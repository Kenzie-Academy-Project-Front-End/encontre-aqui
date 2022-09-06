import { useContext } from 'react';
import { ClaimContext } from '../../contexts/ClaimContext';
import HistoryClaim from '../HistoryClaim';
import HistoryItem from '../HistoryItem';
import ModalDeleteClaim from '../ModalDeleteClaim';
import { StyledClaim, StyledHistory, StyledItem } from './style';

function HistoryUser() {
  const { modalDeleteClaim } = useContext(ClaimContext);

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
    </StyledHistory>
  );
}

export default HistoryUser;
