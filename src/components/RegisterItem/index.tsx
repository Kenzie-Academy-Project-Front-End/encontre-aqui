import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { VscChromeClose } from 'react-icons/vsc';
import { useContext, useEffect, useRef } from 'react';
import { Form, ThemeInput, ThemeLabel, ThemeTextForm } from '../Form';
import { ContainerModal, ErrorsDiv, ModalBox } from './styles';
import { ThemeButton } from '../../styles/buttons';
import { schema } from '../../validators/registerItem';
import { IRegisterItem, ItemContext } from '../../contexts/ItemContext';

export function RegisterItem() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterItem>({ resolver: yupResolver(schema) });

  const { registerItem, setOpenModal } = useContext(ItemContext);

  const modalRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!modalRef.current?.contains(e.target as HTMLDivElement)) {
        setOpenModal(false);
      }
    }

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <ContainerModal>
      <ModalBox>
        <Form ref={modalRef} onSubmit={handleSubmit(registerItem)}>
          <div className='title-and-button'>
            <ThemeTextForm>Cadastrar Item</ThemeTextForm>
            <button
              type='button'
              id='btnCloseModal'
              onClick={() => setOpenModal(false)}
            >
              <VscChromeClose size={25} />
            </button>
          </div>

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

          <ThemeButton size='smaller' buttonColor='orange' type='submit'>
            Cadastrar Item
          </ThemeButton>
        </Form>
      </ModalBox>
    </ContainerModal>
  );
}
