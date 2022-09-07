/* eslint-disable jsx-a11y/control-has-associated-label */
import { GoTrashcan } from 'react-icons/go';
import { useContext, useState } from 'react';
import { ThemeTitle } from '../../styles/typography';
import { Card, CardContainer, TrashBtn } from './styles';
import { IUserApplicant, IUserRequired, RequiredContext } from '../../contexts/RequiredContext';

interface ICardCompany {
  required: IUserRequired;
  applicant: IUserApplicant;
  id: number;
  userId: number;
}

function CardCompany({ required, applicant, id, userId }: ICardCompany) {
  const {DeleteRequired} = useContext(RequiredContext);
  const [showMain, setShowMain] = useState<boolean>(false);
  console.log(required.item.image);
  function IsShowMain() {
    setShowMain(!showMain);
  }

  return (
    <Card isShow={showMain}>
      <header>
        <ThemeTitle className='' tag='h2' titleSize='title10' color='white'>
          Reividicações - ID
        </ThemeTitle>
        <button type='button' onClick={IsShowMain}>
          <div className='btn-show' />
        </button>
      </header>

      <CardContainer>
        <div className='card-container-one'>
          <div className='card-container-one__header'>
            <ThemeTitle className='' tag='h3' titleSize='title11' color='black'>
              Item
            </ThemeTitle>
            <ThemeTitle className='' tag='h3' titleSize='title11' color='black'>
              Requerido
            </ThemeTitle>
          </div>

          <div className='card-container-one__body'>
            <div className='container-one'>
              <img src={required.item.image} alt={required.item.name} />
              <strong>{required.item.status}</strong>
              <h4>{required.item.name}</h4>
              <p>{required.item.description}</p>
            </div>
            <div className='container-two'>
              <span>Email</span>
              <strong>{required.email}</strong>
              <span>Telefone</span>
              <strong>{required.phone}</strong>
              <span>Rede Social</span>
              <strong>{required.social_network}</strong>
            </div>
          </div>
        </div>

        <div className='card-container-two'>
          <ThemeTitle
            className='card-container-two__header'
            tag='h3'
            titleSize='title6'
            color='black'
          >
            Requerente
          </ThemeTitle>
          <div className='card-container-two__body'>
            <span>Email</span>
            <strong>{applicant.email}</strong>
            <span>Telefone</span>
            <strong>{applicant.phone}</strong>
            <span>Rede Social</span>
            <strong>{applicant.social_network}</strong>
            <span>Descrição</span>
            <strong>{applicant.description}</strong>
          </div>
        </div>
      </CardContainer>

      <div className='btn-footer'>
        <TrashBtn isShow={showMain} onClick={()=>DeleteRequired(id)} type='button'>
          <GoTrashcan />
        </TrashBtn>
      </div>
    </Card>
  );
}

export default CardCompany;
