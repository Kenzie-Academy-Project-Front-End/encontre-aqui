import { createContext, ReactNode, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';

interface IUserProviderProps {
  children: ReactNode;
}

export interface IRegisterUser {
  email: string;
  password: string;
  phone: string;
  avatar: string | null;
  social_network: string | null;
}

interface IRegisterUserResponse {
  accessToken: string;
  user: {
    id: string;
    email: string;
    password: string;
    phone: string;
    avatar: string;
    social_network: string;
  };
}

export interface ILogin {
  email: string;
  password: string;
  user: { id: string };
  accessToken: string;
}

interface Itens {
  status: string;
  image: string;
  name: string;
  description: string;
  userId: number;
  id: number;
}

interface IUserContext {
  registerUser: (data: IRegisterUser) => void;
  userLogin: (data: ILogin) => void;
  listUserItens: (userID: number) => void;
  itens: Itens[];
  showPassword: () => void;
  type: string;
  icon: boolean;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [itens, setItens] = useState<Itens[]>([]);
  const [type, setType] = useState<string>('password');
  const [icon, setIcon] = useState<boolean>(true);

  function registerUser(data: IRegisterUser) {
    const responseRegister = api
      .post<IRegisterUserResponse>('/register', data)
      .then((response) => response);
    toast.promise(responseRegister, {
      pending: 'Cadastrando...',
      success: 'Cadastro realizado com sucesso!',
      error: 'Erro ao realizar cadastro!',
    });
  }

  function userLogin(data: ILogin) {
    api
      .post<ILogin>('/login', data)
      .then((response) => {
        window.localStorage.setItem('userID', response.data.user.id);
        window.localStorage.setItem('token', response.data.accessToken);
        toast.success('Bem vindo (a)!');
      })
      .catch(() => toast.error('Email ou senha inválidos'));
  }

  function listUserItens() {
    const userID = window.localStorage.getItem('userID');

    api.get(`/users/${userID}?_embed=itens`).then((response) => {
      setItens(response.data.itens);
    });
  }

  function showPassword() {
    if (type === 'password') {
      setType('text');
      setIcon(true);
    } else {
      setType('password');
      setIcon(false);
    }
  }

  return (
    <UserContext.Provider
      value={{
        registerUser,
        userLogin,
        listUserItens,
        itens,
        showPassword,
        type,
        icon,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
