import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { UserContext } from './UserContext';

interface IClaimProviderProps {
  children: ReactNode;
}

export interface IDataItem {
  status: string;
  image: string;
  name: string;
  description: string;
  userId: number;
  id: number;
}

export interface IDataUser {
  email: string;
  phone: string;
  avatar: string;
  social_network: string;
  id: number;
}

interface IClaimContext {
  modalDeleteClaim: boolean;
  setModalDeleteClaim: Dispatch<SetStateAction<boolean>>;
  modalClaim: boolean;
  setModalClaim: Dispatch<SetStateAction<boolean>>;
  deleteClaim: () => void;
  idClaim: number | null;
  setIdClaim: Dispatch<SetStateAction<number | null>>;
  itemId: number | null;
  setItemId: Dispatch<SetStateAction<number | null>>;
  dataUser: IDataUser;
  dataItem: IDataItem;
  getDataItem: (data: number) => void;
  getDataUser: (data: number) => void;
}

export const ClaimContext = createContext({} as IClaimContext);

export function ClaimProvider({ children }: IClaimProviderProps) {
  const [modalDeleteClaim, setModalDeleteClaim] = useState<boolean>(false);
  const [modalClaim, setModalClaim] = useState<boolean>(false);
  const [idClaim, setIdClaim] = useState<number | null>(null);
  const { control, setControl } = useContext(UserContext);
  const [itemId, setItemId] = useState<number | null>(null);
  const [dataUser, setDataUser] = useState<IDataUser>({} as IDataUser);
  const [dataItem, setDataItem] = useState<IDataItem>({} as IDataItem);

  function sucessDeleteClaim() {
    toast.success('Reivindicação deletada com sucesso', {
      position: 'top-right',
      autoClose: 2000,
      closeOnClick: false,
    });

    setTimeout(() => {
      setControl(!control);
      setModalDeleteClaim(!modalDeleteClaim);
    }, 2000);
  }

  function errorDeleteClaim() {
    toast.error('Houve algum problema', {
      position: 'top-right',
      autoClose: 2000,
      closeOnClick: false,
    });
  }

  function deleteClaim() {
    const token = window.localStorage.getItem('token');

    if (idClaim) {
      api
        .delete(`/claim/${idClaim}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => sucessDeleteClaim())
        .catch(() => errorDeleteClaim());
    }
  }

  function getDataItem(data: number) {
    api.get(`/itens/${data}`).then((res) => {
      setDataItem(res.data);
    });
  }

  function getDataUser(data: number) {
    api.get(`/users/${data}`).then((res) => {
      setDataUser(res.data);
    });
  }

  return (
    <ClaimContext.Provider
      value={{
        modalDeleteClaim,
        setModalDeleteClaim,
        modalClaim,
        setModalClaim,
        deleteClaim,
        idClaim,
        setIdClaim,
        itemId,
        setItemId,
        dataUser,
        dataItem,
        getDataItem,
        getDataUser,
      }}
    >
      {children}
    </ClaimContext.Provider>
  );
}
