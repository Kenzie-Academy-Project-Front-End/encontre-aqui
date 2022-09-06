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
  DeleteRequired: (id:number)=> void;
}

interface IRequiredProviderProps {
  children: ReactNode;
}

export const RequiredContext = createContext({} as IRequiredContext);

export function RequiredProvider({ children }: IRequiredProviderProps) {
  const [requireds, setRequired] = useState<IRequired[]>([]);

  function DeleteRequired(id: number) {
    api.delete(`/claim/${id}`,  {
      headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY2MjQ5NTI4OCwiZXhwIjoxNjYyNDk4ODg4LCJzdWIiOiI0In0.0kTH2ybijxvdiBu5ecz_YMLLt1e96_MCkQMiR6KzJ_k`}
  }
    ).then(response=>console.log(response));
  }

  useEffect(() => {
    api.get<IRequired[]>('/claim').then((res) => setRequired(res.data));
  }, [requireds]);



  return (
    <RequiredContext.Provider value={{ requireds, DeleteRequired }}>
      {children}
    </RequiredContext.Provider>
  );
}
