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

interface IClaimContext {
  modalDeleteClaim: boolean;
  setModalDeleteClaim: Dispatch<SetStateAction<boolean>>;
  deleteClaim: () => void;
  idClaim: number | null;
  setIdClaim: Dispatch<SetStateAction<number | null>>;
}

export const ClaimContext = createContext({} as IClaimContext);

export function ClaimProvider({ children }: IClaimProviderProps) {
  const [modalDeleteClaim, setModalDeleteClaim] = useState<boolean>(false);
  const [idClaim, setIdClaim] = useState<number | null>(null);
  const { control, setControl } = useContext(UserContext);

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

  return (
    <ClaimContext.Provider
      value={{
        modalDeleteClaim,
        setModalDeleteClaim,
        deleteClaim,
        idClaim,
        setIdClaim,
      }}
    >
      {children}
    </ClaimContext.Provider>
  );
}
