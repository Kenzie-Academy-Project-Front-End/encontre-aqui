import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { toast, ToastContainer } from 'react-toastify';
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

interface IItemContext {
  itens: IItem[];
  inputValue: string;
  errorClaim: () => void;
  setFilter: Dispatch<SetStateAction<string>>;
  setInputValue: Dispatch<SetStateAction<string>>;
}

export const ItemContext = createContext({} as IItemContext);

export function ItemProvider({ children }: IItemProviderProps) {
  const [itens, setItens] = useState<IItem[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [inputValue, setInputValue] = useState<string>('');

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
      });
    }
  }, [filter, inputValue]);

  function errorClaim() {
    toast.warn('Faça login ou cadastre-se para reivindicar um item', {
      position: 'top-right',
      autoClose: 3000,
      closeOnClick: false,
    });
  }

  return (
    <ItemContext.Provider
      value={{ itens, errorClaim, setFilter, inputValue, setInputValue }}
    >
      {children}
      <ToastContainer
        pauseOnHover={false}
        draggable={false}
        closeButton={false}
      />
    </ItemContext.Provider>
  );
}
