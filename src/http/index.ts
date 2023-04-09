import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

const isDevelop = true;
export const baseURL = isDevelop
  ? 'http://185.182.111.172:8080/api/dev'
  : 'http://localhost:8000/api';

export const axiosConfig: AxiosRequestConfig = {
  withCredentials: true,
  baseURL,
};

export const $api = axios.create(axiosConfig);

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      'access_token'
    )}`;
  }
  return config;
});

$api.interceptors.response.use(undefined, (error) => {
  // if (error.response?.status === 401) authStore.logout();
  throw error;
});
