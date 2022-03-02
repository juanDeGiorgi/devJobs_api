const bcrypt = require('bcryptjs');
const usersRepository = require('../repositories/users');
const emailService = require('./emailService');
const status = require('../constants/statusCodes');
const messages = require('../constants/messages');

const tokenService = require('./tokenService');


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

const create = async (body) => {
  const user = await usersRepository.create({
    name: body.name,
    last_name: body.last_name,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    description: body.description,
    cv: body.cv,
    rol_id: body.rol_id,

  });

const login = async (data) => {
  const token = await tokenService.tokenGenerator(data);

  if (!token) {
    console.log('error on users.js');
  }
  return token;
};

const create = async (data) => {
  const user = await usersRepository.create(data);

  if (!user) {
    const error = new Error(messages.NOT_FOUND_ERROR);
    error.status = status.NOT_FOUND_ERROR;
    throw error;
  }
  await emailService.senderWelcomeEmail(body.email);
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
  getAll, getById, create, update, remove, login,
};
