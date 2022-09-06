import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
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

interface IClaim {
  user_required: {
    email: string;
    phone: string;
    social_network: string;
    item: Itens;
  };
  user_applicant: {
    email: string;
    phone: string;
    social_network: string;
    description: string;
    image: string;
  };
  userId: number;
  id: number;
}

interface IUserContext {
  registerUser: (data: IRegisterUser) => void;
  userLogin: (data: ILogin) => void;
  itens: Itens[];
  showPassword: () => void;
  type: string;
  icon: boolean;
  user: IUserResponse;
  logout: () => void;
  redirectLadingPage: () => void;
  history: boolean;
  setHistory: Dispatch<SetStateAction<boolean>>;
  claim: IClaim[];
  control: boolean;
  setControl: Dispatch<SetStateAction<boolean>>;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [control, setControl] = useState<boolean>(false);
  const [itens, setItens] = useState<Itens[]>([]);
  const [claim, setClaim] = useState<IClaim[]>([]);
  const [type, setType] = useState<string>('password');
  const [icon, setIcon] = useState<boolean>(true);
  const [user, setUser] = useState<IUserResponse>({} as IUserResponse);
  const [history, setHistory] = useState<boolean>(false);
  const navigate = useNavigate();

  function registerUser(data: IRegisterUser) {
    api
      .post<IRegisterUserResponse>('/register', data)
      .then(() => {
        toast.success('Cadastro realizado com sucesso!');
        navigate('/login', { replace: true });
      })
      .catch((err) => {
        toast.error(err?.response?.data);
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
        setControl(!control);
      })
      .catch((err) => {
        toast.error(err?.response?.data);
      });
  }

  useEffect(() => {
    const userID = window.localStorage.getItem('userID');
    if (userID) {
      navigate('/user', { replace: true });
    } else {
      navigate('/', { replace: true });
    }
  }, [control]);

  useEffect(() => {
    const userID = window.localStorage.getItem('userID');

    if (userID) {
      api.get(`/users/${userID}?_embed=itens`).then((response) => {
        setItens(response.data.itens);
      });
    }
  }, [control]);

  useEffect(() => {
    const userID = window.localStorage.getItem('userID');

    if (userID) {
      api.get(`/users/${userID}?_embed=claim`).then((response) => {
        setClaim(response.data.claim);
      });
    }
  }, [control]);

  useEffect(() => {
    const userID = window.localStorage.getItem('userID');

    if (userID) {
      api.get(`/users/${userID}`).then((res) => {
        setUser(res.data);
      });
    }
  }, [control]);

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
        itens,
        showPassword,
        type,
        icon,
        user,
        logout,
        redirectLadingPage,
        history,
        setHistory,
        claim,
        control,
        setControl,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
