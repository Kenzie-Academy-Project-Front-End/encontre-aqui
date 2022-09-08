import { useContext } from 'react';
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs';
import { ItemContext } from '../../contexts/ItemContext';
import { DivButtons } from './styles';

function ButtonsNavigate() {
  const { paginateRigth, paginateLeft } = useContext(ItemContext);
  return (
    <DivButtons>
      <BsFillArrowLeftSquareFill size={60} onClick={() => paginateLeft()} />
      <BsFillArrowRightSquareFill size={60} onClick={() => paginateRigth()} />
    </DivButtons>
  );
}

export default ButtonsNavigate;
