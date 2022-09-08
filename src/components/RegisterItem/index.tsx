import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { VscChromeClose } from 'react-icons/vsc';
import { useContext } from 'react';
import { Form, ThemeInput, ThemeLabel } from '../Form';
import { ContainerModal, ErrorsDiv, ModalBox } from './styles';
import { ThemeButton } from '../../styles/buttons';
import { schema } from '../../validators/registerItem';
import { IRegisterItem, ItemContext } from '../../contexts/ItemContext';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { ThemeTitle } from '../../styles/typography';

export function RegisterItem() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterItem>({ resolver: yupResolver(schema) });

  const { registerItem, setOpenModal } = useContext(ItemContext);

  const modalRef = useOutsideClick(() => {
    setOpenModal(false);
  });

  return (
    <ContainerModal>
      <ModalBox>
        <Form ref={modalRef} onSubmit={handleSubmit(registerItem)}>
          <div className='title'>
            <ThemeTitle className='' tag='h2' titleSize='title1' color='black'>
              Cadastrar Item
            </ThemeTitle>
          </div>

          <ThemeButton
            size='close'
            buttonColor='false'
            onClick={() => setOpenModal(false)}
          >
            <VscChromeClose size={25} />
          </ThemeButton>

          <ThemeLabel>Status*</ThemeLabel>
          <div
            id='ItemStatusDiv'
            {...register('status')}
            style={{
              borderColor: errors.status?.message ? 'red' : 'transparent',
            }}
          >
            <div className='divLost'>
              <ThemeInput
                type='radio'
                value='lost'
                {...register('status')}
                borderColor={errors.status?.message ? 'error' : 'success'}
              />

              <ThemeLabel>Perdido</ThemeLabel>
            </div>

            <div className='divFound'>
              <ThemeInput
                type='radio'
                value='found'
                {...register('status')}
                borderColor={errors.status?.message ? 'error' : 'success'}
              />

              <ThemeLabel>Encontrado</ThemeLabel>
            </div>
          </div>

          <ThemeLabel htmlFor='url'>URL imagem*</ThemeLabel>
          <ThemeInput
            type='text'
            id='image'
            {...register('image')}
            borderColor={errors.image?.message ? 'error' : 'success'}
          />

          <ErrorsDiv>{errors.image?.message}</ErrorsDiv>

          <ThemeLabel htmlFor='name'>Nome do item*</ThemeLabel>
          <ThemeInput
            type='text'
            {...register('name')}
            borderColor={errors.name?.message ? 'error' : 'success'}
          />
          <ErrorsDiv>{errors.name?.message}</ErrorsDiv>

          <ThemeLabel htmlFor='description'>Descrição do item*</ThemeLabel>
          <ThemeInput
            type='text'
            {...register('description')}
            borderColor={errors.description?.message ? 'error' : 'success'}
          />
          <ErrorsDiv>{errors.description?.message}</ErrorsDiv>
          <div className='buttons'>
            <ThemeButton size='small' buttonColor='orange' type='submit'>
              Cadastrar Item
            </ThemeButton>
          </div>
        </Form>
      </ModalBox>
    </ContainerModal>
  );
}
