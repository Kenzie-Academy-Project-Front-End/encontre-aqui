import { useContext } from 'react';
import { ClaimContext } from '../../contexts/ClaimContext';
import { ItemContext } from '../../contexts/ItemContext';
import { UserContext } from '../../contexts/UserContext';
import AnonymousFilter from '../AnonymousFilter';
import ButtonsNavigate from '../ButtonsNavigate';
import CardUser from '../CardUser';
import HistoryUser from '../HistoryUser';
import { ModalClaim } from '../ModalClaim';
import { RegisterItem } from '../RegisterItem';
import { CardListUser, StyledMainUser } from './styles';

function MainUser() {
  const { history } = useContext(UserContext);
  const { modalClaim } = useContext(ClaimContext);
  const { openModal } = useContext(ItemContext);
  return (
    <StyledMainUser>
      {history ? null : <AnonymousFilter />}
      {history ? (
        <HistoryUser />
      ) : (
        <CardListUser>
          <CardUser />
        </CardListUser>
      )}
      {history ? null : <ButtonsNavigate />}
      {modalClaim && <ModalClaim />}
      {openModal && <RegisterItem />}
    </StyledMainUser>
  );
}

export default MainUser;
