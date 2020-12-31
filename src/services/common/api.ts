import axios from 'axios';
import { SystemParams } from 'src/environment';

export const initializeApi = (baseURL = SystemParams.BASE_API) => {
  const api = axios.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    timeout: 15000,
  });

  // Error handler interceptors
  api.interceptors.response.use(
    async response => {
      return response;
    },
    error => {
      const { response } = error;

      // Handle response when token is invalid/expired
      if (response.status === 401) {

      } else {
        return Promise.reject(error);
      }
    },
  );

  const getRequest = url => api.get(url);
  const postRequest = (url, params) => api.post(url, params);
  const patchRequest = (url, params) => api.patch(url, params);
  const deleteRequest = (url, params) => api.delete(url, params);

  return {
    getRequest,
    postRequest,
    patchRequest,
    deleteRequest,
  };
};