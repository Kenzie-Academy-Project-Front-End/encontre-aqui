import AnonymousFilter from '../AnonymousFilter';
import ButtonsNavigate from '../ButtonsNavigate';
import Card from '../Card';
import { CardList, StyledAnonymousMain } from './styles';

function AnonymousMain() {
  return (
    <StyledAnonymousMain>
      <AnonymousFilter />
      <CardList>
        <Card />
      </CardList>
      <ButtonsNavigate />
    </StyledAnonymousMain>
  );
}

export default AnonymousMain;
