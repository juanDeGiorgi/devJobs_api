const db = require('../database/models');

const getById = async (id) => {
  const roles = await db.Role.findByPk(id);
  return roles;
};

const create = async (name) => {
  const newRole = await db.Role.create({ name });
  return newRole;
};
const remove = async (id) => {
  const deletedRole = await db.Role.destroy({ where: { id } });
  return deletedRole;
};

module.exports = {
  getById,
  create,
  remove,
};
