import { useContext } from 'react';
import { ItemContext } from '../../contexts/ItemContext';
import { UserContext } from '../../contexts/UserContext';
import AnonymousFilter from '../AnonymousFilter';
import ButtonsNavigate from '../ButtonsNavigate';
import CardUser from '../CardUser';
import HistoryUser from '../HistoryUser';
import { RegisterItem } from '../RegisterItem';
import { CardListUser, StyledMainUser } from './styles';

function MainUser() {
  const { history } = useContext(UserContext);
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
      {openModal && <RegisterItem />}
    </StyledMainUser>
  );
}

export default MainUser;
