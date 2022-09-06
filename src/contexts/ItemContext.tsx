import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { UserContext } from './UserContext';

interface IItemProviderProps {
  children: ReactNode;
}

export interface IItem {
  status: string;
  image: string;
  name: string;
  description: string;
  userId: number;
  id: number;
}

export interface IRegisterItem {
  status: string;
  image: string;
  name: string;
  description: string;
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
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  registerItem: (data: IRegisterItem) => void;
  // status: string;
  // setStatus: Dispatch<SetStateAction<string>>;
  // image: string;
  // setImage: Dispatch<SetStateAction<string>>;
  // name: string;
  // setName: Dispatch<SetStateAction<string>>;
  // description: string;
  // setDescription: Dispatch<SetStateAction<string>>;
  currentItem: IItem | null;
  setCurrentItem: Dispatch<SetStateAction<IItem | null>>;
  openModalEdit: boolean;
  setOpenModalEdit: Dispatch<SetStateAction<boolean>>;
  editItem: (data: IItem) => void;
  deleteItem: () => void;
}

export const ItemContext = createContext({} as IItemContext);

export function ItemProvider({ children }: IItemProviderProps) {
  const [itens, setItens] = useState<IItem[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [inputValue, setInputValue] = useState<string>('');
  const [counter, setCounter] = useState<number>(0);
  const [historicCounter, setHistoricCounter] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false);
  // const [status, setStatus] = useState('');
  // const [image, setImage] = useState<string>('');
  // const [name, setName] = useState<string>('');
  // const [description, setDescription] = useState<string>('');
  const [currentItem, setCurrentItem] = useState<IItem | null>(null);
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);

  const { setControl, control, user } = useContext(UserContext);

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

  function registerItem(data: IRegisterItem) {
    api
      .post(
        '/itens',
        { userId: user.id, ...data },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )

      .then(() => {
        toast.success('Item cadastrado com sucesso!');
        setOpenModal(false);
        setControl(!control);
      })
      .catch(() => toast.error('Erro ao cadastrar item'));
  }

  function editItem(data: IItem) {
    api
      .patch(`/itens/${currentItem?.id}`, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then(() => {
        toast.success('Item editado com sucesso!');
        setOpenModalEdit(false);
        setControl(!control);
        setCurrentItem(null);
      })
      .catch(() => toast.error('Erro ao editar o item!'));
  }

  function deleteItem() {
    api
      .delete(`/itens/${currentItem?.id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then(() => {
        toast.success('Item deletado com sucesso!');
        setOpenModalEdit(false);
        setControl(!control);
        setCurrentItem(null);
      })
      .catch(() => toast.error('Erro ao deletar o item!'));
  }

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
        openModal,
        setOpenModal,
        registerItem,
        // status,
        // setStatus,
        // image,
        // setImage,
        // name,
        // setName,
        // description,
        // setDescription,
        currentItem,
        setCurrentItem,
        openModalEdit,
        setOpenModalEdit,
        editItem,
        deleteItem,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
}
