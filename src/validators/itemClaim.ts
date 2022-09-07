import * as yup from 'yup';

export const formSchema = yup.object().shape({
  description: yup
    .string()
    .required('O preenchimento da descrição é obrigatório')
    .min(50, 'Mínimo de 50 caracteres')
    .max(172, 'Máximo de 172 caracteres'),
});
