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

const create = (data) => {
  const user = {
    name: data.name,
    surname: data.surname,
    age: data.age,
  };
  return user;
};

const update = () => {
  const msg = 'user updated';

  return msg;
};

const remove = () => {
  const msg = 'user removed';

  return msg;
};

module.exports = {
  getAll, getById, create, update, remove,
};
