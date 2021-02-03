import config from '@app/config';

export const apiUrl = `${config.SERVER_URL}/api/`;
export const authUrl = `${apiUrl}auth/`;
export const loginUrl = `${authUrl}login/`;
export const registerUrl = `${authUrl}register/`;
export const testApiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
