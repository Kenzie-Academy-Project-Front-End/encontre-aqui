import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';

interface IItemProviderProps {
  children: ReactNode;
}

interface IItem {
  status: string;
  image: string;
  name: string;
  description: string;
  userId: number;
  id: number;
}

export interface IClaimItem {
  user_required: {
    email: string;
    phone: string;
    social_network: string | null;
    item: IItem;
  };
  user_applicant: {
    email: string;
    phone: string;
    description: string;
    image: string;
  };
  userId: number;
}

interface IItemContext {
  itens: IItem[];
  inputValue: string;
  counter: number;
  historicCounter: number;
  errorClaim: () => void;
  setFilter: Dispatch<SetStateAction<string>>;
  setInputValue: Dispatch<SetStateAction<string>>;
  paginateRigth: () => void;
  paginateLeft: () => void;
  setCounter: Dispatch<SetStateAction<number>>;
}

export interface IClaimItemResponse {
  user_required: {
    email: string;
    phone: string;
    social_network: string;
    item: {
      status: string;
      image: string;
      name: string;
      description: string;
      userId: number;
      id: number;
    };
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

export const ItemContext = createContext({} as IItemContext);

export function ItemProvider({ children }: IItemProviderProps) {
  const [itens, setItens] = useState<IItem[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [inputValue, setInputValue] = useState<string>('');
  const [counter, setCounter] = useState<number>(0);
  const [historicCounter, setHistoricCounter] = useState<number>(0);

  useEffect(() => {
    if (filter === 'all' || filter === '') {
      api.get<IItem[]>('/itens').then((res) => {
        setItens(res.data);
      });
    }
    if (filter === 'found' || filter === 'lost') {
      api.get<IItem[]>(`/itens?status=${filter}`).then((res) => {
        setItens(res.data);
      });
    }
    if (
      filter !== 'all' &&
      filter !== 'found' &&
      filter !== 'lost' &&
      filter !== ''
    ) {
      api.get<IItem[]>('/itens').then((res) => {
        const search = res.data.filter(
          (item) =>
            item.name
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .toLowerCase()
              .includes(
                filter
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .toLowerCase()
              ) && item
        );
        setItens(search);
        setCounter(0);
      });
    }
  }, [filter, inputValue, counter]);

  function errorClaim() {
    toast.warn('Faça login ou cadastre-se para reivindicar um item', {
      position: 'top-right',
      autoClose: 3000,
      closeOnClick: false,
    });
  }

  function paginateRigth() {
    if (counter + 6 < itens.length) {
      setCounter(counter + 6);
      setHistoricCounter(counter + 6);
    }
  }

  function paginateLeft() {
    if (counter > 0) {
      setCounter(counter - 6);
      setHistoricCounter(counter - 6);
    }
  }

  // function claimItem(data: any) {
  //   const token = window.localStorage.getItem('token');
  //   const responseClaim = api
  //     .post<IClaimItemResponse>('/claim', data, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //     .then((response) => response);
  //   toast.promise(responseClaim, {
  //     pending: 'Enviando...',
  //     success: 'Reivindicação realizada com sucesso!',
  //     error: 'Erro ao realizar reivindicação!',
  //   });
  // }

  return (
    <ItemContext.Provider
      value={{
        itens,
        errorClaim,
        setFilter,
        inputValue,
        setInputValue,
        paginateRigth,
        paginateLeft,
        counter,
        historicCounter,
        setCounter,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
}
