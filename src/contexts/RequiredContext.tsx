import { toast } from 'react-toastify';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';


interface IItem {
  status: string;
  image: string;
  name: string;
  description: string;
  userId: number;
  id: number;
}

export interface IUserApplicant {
  email: string;
  phone: string;
  social_network: string;
  description: string;
  image: string;
}

export interface IUserRequired {
  email: string;
  phone: string;
  social_network: string;
  item: IItem;
}

interface IRequired {
  user_required: IUserRequired;
  user_applicant: IUserApplicant;
  userId: number;
  id: number;
}

interface IRequiredContext {
  requireds: IRequired[];
  deleteRequired: (id:number)=> void;
}

interface IRequiredProviderProps {
  children: ReactNode;
}

export const RequiredContext = createContext({} as IRequiredContext);

export function RequiredProvider({ children }: IRequiredProviderProps) {
  const [requireds, setRequired] = useState<IRequired[]>([]);


  function sucessDeleteRequired() {
    toast.success('Reivindicação deletada com sucesso', {
      position: 'top-right',
      autoClose: 2500,
      closeOnClick: false,
    });
  }

  function errorDeleteRequired() {
    toast.error('Houve algum problema', {
      position: 'top-right',
      autoClose: 2500,
      closeOnClick: false,
    });
  }


  function deleteRequired(id: number) {
    const token = window.localStorage.getItem('@encontreAqui:adminToken');
  
    api.delete(`/claim/${id}`,  {
      headers: {Authorization: `Bearer ${token}`}
  }
    ).then(()=>sucessDeleteRequired())
    .catch(()=>errorDeleteRequired());
  }

  useEffect(() => {
    api.get<IRequired[]>('/claim').then((res) => setRequired(res.data));
  }, [requireds]);



  return (
    <RequiredContext.Provider value={{ requireds, deleteRequired }}>
      {children}
    </RequiredContext.Provider>
  );
}
