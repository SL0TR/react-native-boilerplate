import axios from 'axios';
import { ToastAndroid } from 'react-native';
import { store } from 'store';

const http = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use(config => {
  const state = store.getState();

  if (state?.Auth?.idToken) {
    const token = `Bearer ${state.Auth.idToken}`;
    config.headers.Authorization = token;
  }

  return config;
});

http.interceptors.response.use(null, error => {
  if (error?.response?.data?.message) {
    ToastAndroid.showWithGravity(
      error.response.data.message,
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
    return { error };
  }

  if (error?.response?.message) {
    ToastAndroid.showWithGravity(
      error.response.message,
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
    return { error };
  }

  return { error };
});

export default http;
