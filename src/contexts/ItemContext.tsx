import { createContext, ReactNode, useEffect, useState } from 'react';
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
}

export const ItemContext = createContext({} as IItemContext);

export function ItemProvider({ children }: IItemProviderProps) {
  const [itens, setItens] = useState<IItem[]>([]);

  useEffect(() => {
    api.get<IItem[]>('/itens').then((res) => setItens(res.data));
  }, []);

  return (
    <ItemContext.Provider value={{ itens }}>{children}</ItemContext.Provider>
  );
}
