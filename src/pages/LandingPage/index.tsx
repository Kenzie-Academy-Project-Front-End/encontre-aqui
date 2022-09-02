import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/LandingPage';
import { ThemeButton } from '../../styles/buttons';
import { ThemeTitle } from '../../styles/typography';
import { StyledLandingPage } from './styles';
import robo from '../../assets/img/landingPage.svg';

export const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <StyledLandingPage>
        <ThemeTitle className='' tag='h1' titleSize='title5' color='white'>
          Achou ou perdeu algo?
        </ThemeTitle>

        <ThemeTitle className='h3' tag='h3' titleSize='title6' color='white'>
          Clicando em visualizar itens você verá a lista de achados e perdidos
        </ThemeTitle>

        <ThemeTitle className='h3' tag='h3' titleSize='title6' color='white'>
          Realizando o cadastro e fazendo login você poderá publicar e
          reivindicar itens!
        </ThemeTitle>

        <div className='buttons'>
          <ThemeButton
            className='button'
            type='button'
            size='medium'
            buttonColor='orange'
            onClick={() => navigate('/')}
          >
            Login
          </ThemeButton>
          <ThemeButton
            className='button'
            type='button'
            size='medium'
            buttonColor='orange'
            onClick={() => navigate('/anonymous')}
          >
            Ver Itens
          </ThemeButton>
        </div>
      </StyledLandingPage>

      <div>
        <figure>
          <img src={robo} alt='Oops 404 Error' />
        </figure>
      </div>
    </Container>
  );
};
