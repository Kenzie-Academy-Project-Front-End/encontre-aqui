import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { schema } from '../../validators/userLogin';
import { ILogin, UserContext } from '../../contexts/UserContext';
import Logo from '../../assets/img/logo.svg';
import imgLogin from '../../assets/img/imgLogin.svg';
import {
  Form,
  ThemeErrorForm,
  ThemeInput,
  ThemeLabel,
} from '../../components/Form';
import { Container } from '../../components/Container';
import { StyledUserLogin } from './styles';
import { ThemeButton } from '../../styles/buttons';
import { ThemeTitle } from '../../styles/typography';

export function UserLogin() {
  const { userLogin, showPassword, type, icon } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({ resolver: yupResolver(schema) });

  return (
    <Container>
      <StyledUserLogin>
        <figure className='logo'>
          <img src={Logo} alt='Logo Encontre Aqui' />
        </figure>

        <Form onSubmit={handleSubmit(userLogin)}>
          <div className='title'>
            <ThemeTitle className='' tag='h2' titleSize='title2' color='black'>
              Login
            </ThemeTitle>
          </div>

          <ThemeLabel htmlFor='email'>Email</ThemeLabel>
          <ThemeInput
            type='text'
            {...register('email')}
            borderColor={errors.email?.message ? 'error' : 'success'}
          />
          <ThemeErrorForm>{errors.email?.message}</ThemeErrorForm>

          <ThemeLabel htmlFor='password'>Senha</ThemeLabel>
          <div className='divPassword'>
            <ThemeInput
              id='password'
              type={type}
              {...register('password')}
              borderColor={errors.password?.message ? 'error' : 'success'}
            />

            <button id='btnPassword' type='button' onClick={showPassword}>
              {icon === true ? <FaEyeSlash size={21} /> : <FaEye size={21} />}
            </button>
          </div>
          <ThemeErrorForm>{errors.password?.message}</ThemeErrorForm>

          <ThemeButton size='large' buttonColor='orange' type='submit'>
            Entrar
          </ThemeButton>
          <div className='buttons'>
            <p>Ainda não tem uma conta?</p>
            <button
              onClick={() => navigate('/register')}
              type='button'
              id='btn_register'
            >
              Cadastre-se
            </button>
          </div>
          <img id='loginIlustration' src={imgLogin} alt='ilustração' />
        </Form>
      </StyledUserLogin>
    </Container>
  );
}
