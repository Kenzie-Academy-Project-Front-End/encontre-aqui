import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
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

interface IUserResponse {
  email: string;
  password: string;
  phone: string;
  avatar: string;
  social_network: string;
  id: number;
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
  listUserItens: () => void;
  itens: Itens[];
  showPassword: () => void;
  type: string;
  icon: boolean;
  userInfo: () => void;
  user: IUserResponse;
  logout: () => void;
  redirectLadingPage: () => void;
  history: boolean;
  setHistory: Dispatch<SetStateAction<boolean>>;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [itens, setItens] = useState<Itens[]>([]);
  const [type, setType] = useState<string>('password');
  const [icon, setIcon] = useState<boolean>(true);
  const [user, setUser] = useState<IUserResponse>({} as IUserResponse);
  const [history, setHistory] = useState<boolean>(false);
  const navigate = useNavigate();

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
        window.localStorage.clear();
        window.localStorage.setItem('userID', response.data.user.id);
        window.localStorage.setItem('token', response.data.accessToken);
        toast.success('Bem vindo (a)!');
        navigate('/user', { replace: true });
      })
      .catch(() => toast.error('Email ou senha inválidos'));
  }

  function listUserItens() {
    const userID = window.localStorage.getItem('userID');

    api.get(`/users/${userID}?_embed=itens`).then((response) => {
      setItens(response.data.itens);
    });
  }

  function userInfo() {
    const userID = window.localStorage.getItem('userID');

    api.get(`/users/${userID}`).then((res) => {
      setUser(res.data);
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

  function logout() {
    toast.success('Até a próxima', {
      position: 'top-right',
      autoClose: 2500,
      closeOnClick: false,
    });
    setTimeout(() => {
      window.localStorage.clear();
      navigate('/', { replace: true });
    }, 3000);
  }

  function redirectLadingPage() {
    setTimeout(() => {
      window.localStorage.clear();
      navigate('/', { replace: true });
    }, 100);
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
        userInfo,
        user,
        logout,
        redirectLadingPage,
        history,
        setHistory,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
