import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
// import { useAuthStore } from 'src/stores/AuthStore';
import { logoutFunc } from 'src/stores/AuthStore';
import { appendRequest, registerBadResponse, resolveRequest } from 'src/stores/LoadingStore';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

// const authStore = useAuthStore();
const baseURL = '/api';
// const baseURL = 'http://185.182.111.172:8080/api/dev';
export const axiosConfig: AxiosRequestConfig = {
  withCredentials: true,
  baseURL,
};

const $api = axios.create(axiosConfig);

$api.interceptors.request.use((config) => {
  const timeout = 10000;
  // console.log(config)
  if (
    config.headers &&
    !config.url?.startsWith('/labs/quantity') &&
    !config.url?.startsWith('/labs') &&
    !config.url?.startsWith('/api/labs') &&
    !config.url?.startsWith('/reviews') &&
    !config.url?.startsWith('/health') &&
    !config.url?.startsWith('/signup') &&
    !config.url?.startsWith('/signup/confirm') &&
    !config.url?.startsWith('/login')
  )
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      'access_token'
    )}`;

  config.headers['ngrok-skip-browser-warning'] = 'skip-browser-warning';
  config.timeout = timeout;


  if (
    config.url?.startsWith('/labs/quantity') ||
    config.url?.startsWith('/labs') ||
    config.url?.startsWith('/reviews')
  ) appendRequest(config);
  return config;
});

$api.interceptors.response.use((value) => {
  resolveRequest(value.config)
  return value;
}, (error) => {

  //порядок ПИЗДЕЦ важен. Не меняйте местами пожалуйста
  registerBadResponse(error);
  resolveRequest(error.config)

  if (error.response?.status === 401) logoutFunc();

  throw error;
});

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = $api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { $api };
