const usersRepository = require('../repositories/users');
<<<<<<< HEAD
=======
const emailService = require('./emailService');
>>>>>>> f75c1af2701e01c464dccfc4a2e9368ba753c08d

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

<<<<<<< HEAD
=======
const create = async (data) => {
  const user = await usersRepository.create(data);
  if (!user) {
    const error = new Error('Not found');
    error.status = 404;
    throw error;
  }
  await emailService.senderWelcomeEmail(data.email);
  return user;
};

>>>>>>> f75c1af2701e01c464dccfc4a2e9368ba753c08d
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
<<<<<<< HEAD
  getAll, getById, update, remove,
=======
  getAll, getById, create, update, remove,
>>>>>>> f75c1af2701e01c464dccfc4a2e9368ba753c08d
};
