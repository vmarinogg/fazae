import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: 'localhost:1117/dev',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'JWT'
    }
  });
};
