/* eslint-disable no-unused-vars */
const uuid = require('uuid');
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [{
    id: uuid.v4(),
    name: 'Alexis',
    last_name: 'Zacre',
    email: 'alexis123@mail.com',
    createdAt: new Date(),
    updatedAt: new Date(),
    password: bcrypt.hashSync('hola123', 10),
    rol_id: 1,
    description: 'hola mundo',
    cv: '90ssdwqq-qww2aSfa',
  },
  {
    id: uuid.v4(),
    name: 'Juan',
    last_name: 'De Giorgi',
    email: 'juan123@mail.com',
    createdAt: new Date(),
    updatedAt: new Date(),
    password: bcrypt.hashSync('hola123', 10),
    rol_id: 1,
    description: 'hola mundo',
    cv: '90ssdwqq-qww2aSfa',
  },
  {
    id: uuid.v4(),
    name: 'Ezequiel',
    last_name: 'Rango',
    email: 'Ezequiel123@mail.com',
    createdAt: new Date(),
    updatedAt: new Date(),
    password: bcrypt.hashSync('hola123', 10),
    rol_id: 1,
    description: 'hola mundo',
    cv: '90ssdwqq-qww2aSfa',
  },
  ]),

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
