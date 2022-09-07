import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaRegWindowClose } from 'react-icons/fa';
import { formSchema } from '../../validators/itemClaim';
import { ThemeButton } from '../../styles/buttons';
import { ThemeTitle } from '../../styles/typography';
import {
  ClaimContext,
  IDataItem,
  IDataUser,
} from '../../contexts/ClaimContext';
import { StyledModalClaim } from './styles';
import { Itens, UserContext } from '../../contexts/UserContext';
import { IClaimItemResponse, ItemContext } from '../../contexts/ItemContext';
import { api } from '../../services/api';

export const ModalClaim = () => {
  const { setModalClaim, dataItem, dataUser } = useContext(ClaimContext);
  const { userClaim } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function juntarInfos(data: Itens) {
    const userIdLogado = window.localStorage.getItem('userID');

    // eslint-disable-next-line camelcase
    const { email, phone, social_network } = dataUser;

    // eslint-disable-next-line camelcase
    const data_claim = {
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

    const token = window.localStorage.getItem('token');
    const responseClaim = api
      .post<IClaimItemResponse>('/claim', data_claim, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response);
    toast.promise(responseClaim, {
      pending: 'Enviando...',
      success: 'Reivindicação realizada com sucesso!',
      error: 'Erro ao realizar reivindicação!',
    });
  }

  const getDescription = (data: any) => {
    setModalClaim(!setModalClaim);
    juntarInfos(data);
  };

  return (
    <StyledModalClaim>
      <div className='content'>
        <div className='header'>
          <ThemeTitle
            className='title'
            tag='h2'
            titleSize='title1'
            color='white'
          >
            Reivindicação
          </ThemeTitle>

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
          <form onSubmit={handleSubmit(getDescription)}>
            <textarea
              className='textArea'
              {...register('description')}
              maxLength={172}
              placeholder='Adicione uma descrição para a reivindicação'
            />
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
