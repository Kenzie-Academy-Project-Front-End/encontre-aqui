import * as yup from 'yup';

export const schema = yup.object().shape({
  status: yup.string().required('status obrigatório'),
  image: yup.string().required('Imagem obrigatória'),
  name: yup
    .string()
    .required('Nome obrigatório')
    .max(30, 'Máximo de 30 caracteres'),
  description: yup
    .string()
    .required('Descrição obrigatória')
    .min(50, 'Mínimo de 50 caracteres')
    .max(172, 'Máximo de 172 caracteres'),
});
