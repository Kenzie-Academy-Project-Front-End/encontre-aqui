import { createContext, ReactNode, useEffect, useState } from 'react';
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
  errorClaim: () => void;
}

export const ItemContext = createContext({} as IItemContext);

export function ItemProvider({ children }: IItemProviderProps) {
  const [itens, setItens] = useState<IItem[]>([]);

  useEffect(() => {
    api.get<IItem[]>('/itens').then((res) => setItens(res.data));
  }, []);

  function errorClaim() {
    toast.warn('Faça login ou cadastre-se para reivindicar um item', {
      position: 'top-right',
      autoClose: 3000,
      closeOnClick: false,
    });
  }

  return (
    <ItemContext.Provider value={{ itens, errorClaim }}>
      {children}
      <ToastContainer
        pauseOnHover={false}
        draggable={false}
        closeButton={false}
      />
    </ItemContext.Provider>
  );
}
