const aplicantsRepository = require('../repositories/aplicants');

const getAll = async () => {
  const users = await aplicantsRepository.getAll();
  if (!users) {
    const error = new Error('Not found');
    error.status = 404;
    throw error;
  }
  return users;
};

const getById = async () => {
  const aplicant = await aplicantsRepository.getById();
  if (!aplicant) {
    const error = new Error('Not found');
    error.status = 404;
    throw error;
  }
  return aplicant;
};

module.exports = { getAll, getById };
