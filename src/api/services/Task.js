import Api from './api';

const addUser = async user => {
  return await Api().post('/addUser', user);
};

const getUser = async () => {
  return await Api().get('/user');
};
