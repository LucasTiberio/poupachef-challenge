import axios from 'axios';

export default axios.create({
  timeout: 30000,
  withCredentials: true,
  baseURL: 'https://psad9m6vrj.execute-api.sa-east-1.amazonaws.com/test',
  headers: {
    Authorization: `Bearer ${'token goes here'}`,
    common: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  },
});
