import AnonymousFilter from '../AnonymousFilter';
import ButtonsNavigate from '../ButtonsNavigate';
import CardUser from '../CardUser';
import { CardListUser, StyledMainUser } from './styles';

function MainUser() {
  return (
    <StyledMainUser>
      <AnonymousFilter />
      <CardListUser>
        <CardUser />
      </CardListUser>
      <ButtonsNavigate />
    </StyledMainUser>
  );
}

export default MainUser;
