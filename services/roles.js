const rolesRepository = require('../repositories/roles');
const status = require('../constants/statusCodes');
const messages = require('../constants/messages');

const getById = (id) => {
  const rol = rolesRepository.getById(id);
  if (!rol) {
    const error = new Error(messages.NOT_FOUND_ERROR);
    error.status = status.NOT_FOUND_ERROR;
    throw error;
  }

  return rol;
};

const create = async (data) => {
  const newRol = await rolesRepository.create(data);
  if (!newRol) {
    const error = new Error(messages.NOT_FOUND_ERROR);
    error.status = status.NOT_FOUND_ERROR;
    throw error;
  }
  return newRol;
};

const remove = async (id) => {
  const rowAffected = await rolesRepository.remove(id);
  if (rowAffected !== 1) {
    const error = new Error(messages.BAD_REQUEST_ERROR);
    error.status = status.BAD_REQUEST_ERROR;
    throw error;
  }
  return rowAffected;
};

module.exports = {
  getById,
  create,
  remove,
};
