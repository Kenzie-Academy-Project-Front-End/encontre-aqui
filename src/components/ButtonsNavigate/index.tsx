import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs';
import { DivButtons } from './styles';

function ButtonsNavigate() {
  return (
    <DivButtons>
      <BsFillArrowLeftSquareFill size={60} />
      <BsFillArrowRightSquareFill size={60} />
    </DivButtons>
  );
}

export default ButtonsNavigate;
