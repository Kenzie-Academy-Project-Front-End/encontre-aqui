import HistoryItem from '../HistoryItem';
import { StyledClaim, StyledHistory, StyledItem } from './style';

function HistoryUser() {
  return (
    <StyledHistory>
      
      <StyledItem>
        <h2>Itens cadastrados</h2>
        <HistoryItem />
      </StyledItem>
      <StyledClaim>
        <h2>Itens Reivindicados</h2>
      </StyledClaim>
    </StyledHistory>
  );
}

export default HistoryUser;
