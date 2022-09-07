import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaRegWindowClose } from 'react-icons/fa';
import { formSchema } from '../../validators/itemClaim';
import { ThemeButton } from '../../styles/buttons';
import { ThemeTitle } from '../../styles/typography';
import { ClaimContext } from '../../contexts/ClaimContext';
import { StyledModalClaim } from './styles';
import { Itens, UserContext } from '../../contexts/UserContext';
import { ItemContext } from '../../contexts/ItemContext';
import { ThemeErrorForm } from '../Form';
import { useOutsideClick } from '../../hooks/useOutsideClick';

export const ModalClaim = () => {
  const { setModalClaim, dataItem, dataUser } = useContext(ClaimContext);
  const { claimItem } = useContext(ItemContext);
  const { userClaim } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Itens>({ resolver: yupResolver(formSchema) });

  function juntarInfos(data: Itens) {
    const userIdLogado = window.localStorage.getItem('userID');
    // eslint-disable-next-line camelcase
    const { email, phone, social_network } = dataUser;
    // eslint-disable-next-line camelcase
    const dataClaim = {
      user_required: {
        email,
        phone,
        // eslint-disable-next-line camelcase
        social_network,
        item: dataItem,
      },
      user_applicant: {
        email: userClaim.email,
        phone: userClaim.phone,
        // eslint-disable-next-line camelcase
        social_network: userClaim.social_network,
        description: data.description,
        image: dataItem.image,
      },
      userId: userIdLogado,
    };

    claimItem(dataClaim);
  }

  const getDescription = (data: any) => {
    setModalClaim(!setModalClaim);
    juntarInfos(data);
  };

  const modalRef = useOutsideClick(() => {
    setModalClaim(!setModalClaim);
  });

  return (
    <StyledModalClaim>
      <div className='content'>
        <div className='header'>
         

          <div className='close'>
            <FaRegWindowClose
              size={30}
              color='white'
              className='close'
              onClick={() => {
                setModalClaim(!setModalClaim);
              }}
            />
          </div>
        </div>

        <div className='divForm'>
          <form ref={modalRef} onSubmit={handleSubmit(getDescription)}>
          <ThemeTitle
            className='title'
            tag='h2'
            titleSize='title1'
            color='white'
          >
            Reivindicação
          </ThemeTitle>
            <textarea
              className='textArea'
              {...register('description')}
              maxLength={172}
              placeholder='Adicione uma descrição para a reivindicação'
            />
            <ThemeErrorForm>{errors.description?.message}</ThemeErrorForm>
            <div className='buttons'>
              <ThemeButton size='small' buttonColor='orange'>
                Enviar
              </ThemeButton>
            </div>
          </form>
        </div>
      </div>
    </StyledModalClaim>
  );
};
