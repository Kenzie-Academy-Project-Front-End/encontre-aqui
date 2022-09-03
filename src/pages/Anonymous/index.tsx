import AnonymousHeader from '../../components/AnonymousHeader';
import AnonymousMain from '../../components/AnonymousMain';
import { Container } from '../../components/Container';

function AnonymousNavigate() {
  return (
    <>
      <AnonymousHeader />
      <Container>
        <AnonymousMain />
      </Container>
    </>
  );
}

export default AnonymousNavigate;
