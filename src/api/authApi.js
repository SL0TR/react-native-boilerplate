import { http } from '@app/services';
import { loginUrl, registerUrl, testApiUrl } from './endpoints';

export const Auth = {
  login: data => http.post(loginUrl, data),
  create: data => http.post(registerUrl, data),
  test: () => http.get(testApiUrl),
};
