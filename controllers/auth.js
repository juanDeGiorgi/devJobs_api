const usersService = require('../services/users');

const login = async (req, res, next) => {
  try {
    const user = {
      id: 1,
      name: 'Alexis',
      lastName: 'Zacre',
      email: 'alexis10893123@gmail.com',
    };
    const token = await usersService.login(user);

    res.json(`token: ${token}`);
  } catch (error) {
    next(error);
  }
};

module.exports = { login };
