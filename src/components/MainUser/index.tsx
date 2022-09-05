import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import AnonymousFilter from '../AnonymousFilter';
import ButtonsNavigate from '../ButtonsNavigate';
import CardUser from '../CardUser';
import HistoryUser from '../HistoryUser';
import { CardListUser, StyledMainUser } from './styles';

function MainUser() {
  const { history } = useContext(UserContext);
  return (
    <StyledMainUser>
      <AnonymousFilter />
      {history ? (
        <HistoryUser />
      ) : (
        <CardListUser>
          <CardUser />
        </CardListUser>
      )}
      {history ? null : <ButtonsNavigate />}
    </StyledMainUser>
  );
}

export default MainUser;
