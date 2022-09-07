import { createContext, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../services/api';

interface IAdminProviderProps {
  children: ReactNode;
}

export interface ILogin {
  email: string;
  password: string;
  user: { id: string };
  accessToken: string;
}

interface IAdminContext {
  adminLogin: (data: ILogin) => void;
  showPassword: () => void;
  type: string;
  icon: boolean;
}

export const AdminContext = createContext({} as IAdminContext);

export const AdminProvider = ({ children }: IAdminProviderProps) => {
  const [type, setType] = useState<string>('password');
  const [icon, setIcon] = useState<boolean>(true);

  const navigate = useNavigate();

  function adminLogin(data: ILogin) {
    // mudar para email admin@gmail.com
    if (data.email !== 'admin@gmail.com') {
      toast.warn('O email não tem permissão admin!', { autoClose: 2000 });
    } else {
      api
        .post<ILogin>('/login', data)
        .then((response) => {
          window.localStorage.clear();
          window.localStorage.setItem(
            '@encontreAqui:adminId',
            response.data.user.id
          );
          window.localStorage.setItem(
            '@encontreAqui:adminToken',
            response.data.accessToken
          );
          toast.success('Bem vindo (a)!', { autoClose: 2000 });
          // navigate('/user', { replace: true });
          // console.log('Redirecionar para página admin');
        })
        .catch((err) => {
          toast.error(err?.response?.data, { autoClose: 2000 });
        });
    }
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
    <AdminContext.Provider
      value={{
        adminLogin,
        showPassword,
        type,
        icon,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
