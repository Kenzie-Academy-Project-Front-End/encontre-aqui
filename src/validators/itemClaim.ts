import * as yup from 'yup';

export const formSchema = yup.object().shape({
  description: yup
    .string()
    .required('O preenchimento da descrição é obrigatório')
    .max(172, 'Sua descrição não deve ser maior que 172 caracteres'),
});
