import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container } from '../../components/Container';
import { UserContext, IRegisterUser } from '../../contexts/UserContext';
import { schema } from '../../validators/userRegister';
import { StyledUserRegister } from './styles';
import { ThemeTitle } from '../../styles/typography';
import {
  Form,
  ThemeLabel,
  ThemeInput,
  ThemeErrorForm,
  ThemeTextForm,
} from '../../components/Form';
import { ThemeButton } from '../../styles/buttons';
import Logo from '../../assets/img/logo.svg';
import imgRegister from '../../assets/img/imgRegister.svg';

export const UserRegister = () => {
  const { registerUser } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({ resolver: yupResolver(schema) });

  return (
    <Container>
      <StyledUserRegister>
        <figure className='logo'>
          <img src={Logo} alt='Logo Encontre Aqui' />
        </figure>

        <Form onSubmit={handleSubmit(registerUser)}>
          <div className='title'>
            <ThemeTitle className='' tag='h2' titleSize='title2' color='black'>
              Cadastro
            </ThemeTitle>
          </div>

          <ThemeLabel htmlFor='email'>Email *</ThemeLabel>
          <ThemeInput
            type='text'
            id='email'
            {...register('email')}
            placeholder='Digite aqui o seu email'
            borderColor={errors.email?.message ? 'error' : 'success'}
          />
          <ThemeErrorForm>{errors.email?.message}</ThemeErrorForm>

          <ThemeLabel htmlFor='password'>Senha *</ThemeLabel>
          <ThemeInput
            type='password'
            id='password'
            {...register('password')}
            placeholder='Digite aqui a sua senha'
            borderColor={errors.password?.message ? 'error' : 'success'}
          />
          <ThemeErrorForm>{errors.password?.message}</ThemeErrorForm>

          <ThemeLabel htmlFor='phone'>Telefone *</ThemeLabel>
          <ThemeInput
            type='text'
            id='phone'
            {...register('phone')}
            placeholder='Digite aqui a sua senha'
            borderColor={errors.phone?.message ? 'error' : 'success'}
          />
          <ThemeErrorForm>{errors.phone?.message}</ThemeErrorForm>

          <ThemeLabel htmlFor='avatar'>URL Avatar</ThemeLabel>
          <ThemeInput
            type='text'
            id='avatar'
            {...register('avatar')}
            placeholder='Digite aqui a sua senha'
            borderColor='success'
          />

          <ThemeLabel htmlFor='social_network'>Rede Social</ThemeLabel>
          <ThemeInput
            type='text'
            id='social_network'
            {...register('social_network')}
            placeholder='Digite aqui a sua senha'
            borderColor='success'
          />

          <div className='buttons'>
            <ThemeButton size='large' buttonColor='orange' type='submit'>
              Cadastrar
            </ThemeButton>

            <ThemeTextForm>Já possui conta?</ThemeTextForm>

            <ThemeButton
              size='large'
              buttonColor='orange'
              type='button'
              onClick={() => navigate('/login')}
            >
              Login
            </ThemeButton>
          </div>

          <img className='userIlustration' src={imgRegister} alt='ilustração' />
        </Form>
      </StyledUserRegister>
    </Container>
  );
};
