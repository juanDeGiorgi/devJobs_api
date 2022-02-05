const service = require('../services/companies');

const getAll = (req, res, next) => {
  try {
    const companies = service.getAll();

    res.json({ companies });
  } catch (err) {
    next(err);
  }
};

const getOne = (req, res, next) => {
  try {
    const { id } = req.params;
    const company = service.getOne(id);

    res.json({ company });
  } catch (err) {
    next(err);
  }
};

const create = (req, res, next) => {
  try {
    const data = req.body;
    const createdCompany = service.create(data);

    res.json({ createdCompany });
  } catch (err) {
    next(err);
  }
};

const update = (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedCompany = service.update(id, data);

    res.json({ updatedCompany });
  } catch (err) {
    next(err);
  }
};

const destroy = (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedCompany = service.destroy(id);

    res.json({ deletedCompany });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  destroy,
};
