import HistoryClaim from '../HistoryClaim';
import HistoryItem from '../HistoryItem';
import { StyledClaim, StyledHistory, StyledItem } from './style';

function HistoryUser() {
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
    </StyledHistory>
  );
}

export default HistoryUser;
