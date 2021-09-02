import axios from 'axios';
import AppConfig, {AppConfigEnum} from 'config/AppConfig';

const instance = axios.create({
  baseURL: AppConfig.get(AppConfigEnum.apiUrl),
  timeout: 15000,
});

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log('AXIOS REQUEST', config);
    return config;
  },
  function (error) {
    // Do something with request error
    console.log(error.response);
    return Promise.reject(error);
  },
);

export default instance;
