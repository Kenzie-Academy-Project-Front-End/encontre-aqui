import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { schema } from '../../validators/userLogin';
import Logo from '../../assets/img/logo.svg';
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
import { ILogin, AdminContext } from '../../contexts/AdminContext';

export function AdminLogin() {
  const { adminLogin, showPassword, type, icon } = useContext(AdminContext);

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

        <Form onSubmit={handleSubmit(adminLogin)}>
          <div className='title'>
            <ThemeTitle className='' tag='h2' titleSize='title2' color='black'>
              Login Admin
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

          <div className='buttons'>
            <ThemeButton size='large' buttonColor='orange' type='submit'>
              Entrar
            </ThemeButton>
          </div>
        </Form>
      </StyledUserLogin>
    </Container>
  );
}
