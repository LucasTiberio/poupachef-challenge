import axios from 'axios';
import { isAuthenticated, getTokenAuthentication } from '@poupachef/support/helpers/authentication';

const api = () => {
  const getBearerToken = () => {
    if (isAuthenticated()) {
      return `Bearer ${getTokenAuthentication()}`;
    }
    return '';
  };

  return axios.create({
    timeout: 30000,
    baseURL: 'https://psad9m6vrj.execute-api.sa-east-1.amazonaws.com/test',
    headers: {
      common: {
        Authorization: getBearerToken(),
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
  });
};

export default api();
