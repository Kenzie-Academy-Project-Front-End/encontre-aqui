import { createContext, ReactNode } from 'react';
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

interface IUserContext {
  registerUser: (data: IRegisterUser) => void;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
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

  return (
    <UserContext.Provider value={{ registerUser }}>
      {children}
    </UserContext.Provider>
  );
};
