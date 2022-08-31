import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://json-server-lost-found-user.herokuapp.com',
  timeout: 5000,
});
