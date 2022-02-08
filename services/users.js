const usersRepository = require('../repositories/users');

const getAll = async () => {
  const users = await usersRepository.getAll();
  if (!users) {
    const error = new Error('Not found');
    error.status = 404;
    throw error;
  }
  return users;
};

const getById = async () => {
  const user = await usersRepository.getById();
  if (!user) {
    const error = new Error('Not found');
    error.status = 404;
    throw error;
  }
  return user;
};

const update = async () => {
  const userUpdated = await usersRepository.update();
  if (!userUpdated) {
    const error = new Error('Not found');
    error.status = 404;
    throw error;
  }
  return userUpdated;
};

const remove = async () => {
  const message = await usersRepository.remove();
  if (!message) {
    const error = new Error('Not found');
    error.status = 404;
    throw error;
  }
  return message;
};

module.exports = {
  getAll, getById, update, remove,
};
