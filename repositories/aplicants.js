const getAll = () => {
  const users = [{
    name: 'Alexis',
    surname: 'Zacre',
    age: 20,
  },
  {
    name: 'Juan',
    surname: 'De Giorgi',
    age: 20,
  },
  {
    name: 'Ezequiel',
    surname: 'Rango',
    age: 20,
  }];
  return users;
};

const getById = () => {
  const user = {
    name: 'Alexis',
    surname: 'Zacre',
    age: 20,
  };
  return user;
};
module.exports = { getAll, getById };
