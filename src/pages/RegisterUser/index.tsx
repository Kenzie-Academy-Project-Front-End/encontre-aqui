import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container } from '../../components/Container';
import { UserContext, IRegisterUser } from '../../contexts/UserContext';
import { schema } from '../../validators/registerUser';
import { StyledRegisterUser } from './styles';
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
import imageBackground from '../../assets/img/imagem_register.svg';

export const RegisterUser = () => {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({ resolver: yupResolver(schema) });

  return (
    <Container>
      <StyledRegisterUser>
        <figure className='logo'>
          <img src={Logo} alt='logo' />
        </figure>

        <Form onSubmit={handleSubmit(registerUser)}>
          <div className='title'>
            <ThemeTitle className='' tag='h2' titleSize='title2' color='black'>
              Cadastro
            </ThemeTitle>
          </div>

          <ThemeLabel htmlFor='email'>Email:</ThemeLabel>
          <ThemeInput
            type='text'
            id='email'
            {...register('email')}
            placeholder='Digite aqui o seu email'
            borderColor={errors.email?.message ? 'error' : 'success'}
          />
          <ThemeErrorForm>{errors.email?.message}</ThemeErrorForm>

          <ThemeLabel htmlFor='password'>Senha:</ThemeLabel>
          <ThemeInput
            type='password'
            id='password'
            {...register('password')}
            placeholder='Digite aqui a sua senha'
            borderColor={errors.password?.message ? 'error' : 'success'}
          />
          <ThemeErrorForm>{errors.password?.message}</ThemeErrorForm>

          <ThemeLabel htmlFor='phone'>Telefone:</ThemeLabel>
          <ThemeInput
            type='text'
            id='phone'
            {...register('phone')}
            placeholder='Digite aqui a sua senha'
            borderColor={errors.phone?.message ? 'error' : 'success'}
          />
          <ThemeErrorForm>{errors.phone?.message}</ThemeErrorForm>

          <ThemeLabel htmlFor='avatar'>URL Avatar:</ThemeLabel>
          <ThemeInput
            type='text'
            id='avatar'
            {...register('avatar')}
            placeholder='Digite aqui a sua senha'
            borderColor='success'
          />

          <ThemeLabel htmlFor='social_network'>Rede Social:</ThemeLabel>
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

            <ThemeButton size='large' buttonColor='orange' type='button'>
              Login
            </ThemeButton>
          </div>
          <img
            className='imageBackground'
            src={imageBackground}
            alt='imageBackground'
          />
        </Form>
      </StyledRegisterUser>
    </Container>
  );
};
