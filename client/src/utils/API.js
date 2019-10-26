import axios from 'axios';

const API = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:9000'
});

API.interceptors.response.use(
  response => (response ? response.data : {}),
  error => {
    // eslint-disable-next-line no-console
    console.log(error);
  }
);

API.interceptors.request.use(async config => {
  const token = localStorage.getItem('token');
  if (!token) return config;
  return {
    ...config,
    header: { 'X-Access-Token': token }
  };
});

export default API;
