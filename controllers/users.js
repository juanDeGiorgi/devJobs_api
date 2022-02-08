const usersService = require('../services/users');

const getAll = async (req, res, next) => {
  try {
    const users = await usersService.getAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
};
const getById = async (req, res, next) => {
  try {
    const user = await usersService.getById();
    res.json(user);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const updatedUser = await usersService.update();
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const message = await usersService.remove();
    res.json(message);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAll, getById, update, remove,
};
