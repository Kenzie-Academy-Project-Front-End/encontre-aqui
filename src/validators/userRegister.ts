import * as yup from 'yup';

export const schema = yup.object({
  email: yup
    .string()
    .required('O campo email é obrigatório!')
    .email('Insira um email válido!'),
  password: yup
    .string()
    .matches(/^[0-9a-zA-Z$*&@#]{8,}$/, 'Senha com no mínimo 8 caracteres!')
    .matches(
      /^(?=.*[$*&@#])/,
      'Senha precisa conter um caractere especial ($*&@#)!'
    )
    .matches(/^(?=.*[A-Z])/, 'Senha precisa conter uma letra maiúscula!')
    .matches(/^(?=.*[a-z])/, 'Senha precisa conter uma letra minúscula!')
    .matches(/^(?=.*\d)/, 'Senha precisa conter um número!'),
  phone: yup.string().required('O campo telefone é obrigatório!'),
});
