const repository = require('../repositories/companies');

const getAll = () => {
  try {
    const companies = repository.getAll();

    return companies;
  } catch (err) {
    throw new Error(err);
  }
};

const getOne = (id) => {
  try {
    const company = repository.getOne(id);

    return company;
  } catch (err) {
    throw new Error(err);
  }
};

const create = (data) => {
  try {
    const Newcompany = repository.create(data);

    return Newcompany;
  } catch (err) {
    throw new Error(err);
  }
};

const update = (id, data) => {
  try {
    const companyUpdated = repository.update(id, data);

    return companyUpdated;
  } catch (err) {
    throw new Error(err);
  }
};

const destroy = (id) => {
  try {
    const deletedCompany = repository.destroy(id);

    return deletedCompany;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  destroy,
};
