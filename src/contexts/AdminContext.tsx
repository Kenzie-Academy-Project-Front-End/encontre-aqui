import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
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
  loginAdmin: boolean;
  setLoginAdmin: Dispatch<SetStateAction<boolean>>;
  redirectAdminLogin: () => void;
}

export const AdminContext = createContext({} as IAdminContext);

export const AdminProvider = ({ children }: IAdminProviderProps) => {
  const [type, setType] = useState<string>('password');
  const [icon, setIcon] = useState<boolean>(true);
  const [loginAdmin, setLoginAdmin] = useState<boolean>(false);

  const navigate = useNavigate();

  function adminLogin(data: ILogin) {
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
          setLoginAdmin(true);
          toast.success('Bem vindo (a)!', { autoClose: 2000 });
          navigate('/company', { replace: true });
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

  function redirectAdminLogin() {
    setTimeout(() => {
      window.localStorage.clear();
      navigate('/admin', { replace: true });
    }, 100);
  }

  return (
    <AdminContext.Provider
      value={{
        adminLogin,
        showPassword,
        type,
        icon,
        loginAdmin,
        setLoginAdmin,
        redirectAdminLogin
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
