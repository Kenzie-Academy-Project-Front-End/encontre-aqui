import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
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
            onClick={() => {
              toast.success('Redirecinando para o login', {
                autoClose: 1500,
                closeOnClick: false,
                closeButton: false,
              });
              setTimeout(() => {
                navigate('/login', { replace: true });
              }, 1600);
            }}
          >
            Login
          </ThemeButton>
          <ThemeButton
            className='button'
            type='button'
            size='medium'
            buttonColor='orange'
            onClick={() => {
              toast('🙂 Fique a vontade 🙃', {
                autoClose: 1500,
                closeOnClick: false,
                closeButton: false,
              });
              setTimeout(() => {
                navigate('/anonymous', { replace: true });
              }, 1600);
            }}
          >
            Ver Itens
          </ThemeButton>
        </div>
      </StyledLandingPage>

      <div className='figure'>
        <figure>
          <img src={robo} alt='Oops 404 Error' />
        </figure>
      </div>
    </Container>
  );
};
