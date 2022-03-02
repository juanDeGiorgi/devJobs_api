const rolesService = require('../services/roles');
const status = require('../constants/statusCodes');
const messages = require('../constants/messages');

const getById = async (req, res, next) => {
  try {
    const rol = await rolesService.getById(req.params.id);

    res.status(status.RESPONSE_OK).json(
      {
        status: status.RESPONSE_OK,
        msg: messages.RESPONSE_OK,
        rol,
      },
    );
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const newRol = await rolesService.create(req.body.name);
    res.status(status.RESPONSE_OK_CREATED).json(
      {
        status: status.RESPONSE_OK_CREATED,
        msg: messages.RESPONSE_OK_CREATED,
        newRol,
      },
    );
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    await rolesService.remove(req.params.id);
    res.status(status.RESPONSE_OK_UPDATED).json(
      {
        status: status.RESPONSE_OK_UPDATED,
        msg: messages.RESPONSE_OK_UPDATED,
        rol: `rol with id: ${req.params.id} has been deleted.`,
      },
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getById,
  create,
  remove,
};
