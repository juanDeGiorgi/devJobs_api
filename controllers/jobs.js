const services = require('../services/jobs');

const getAll = async (req, res, next) => {
  try {
    const jobs = await services.getAll();
    res.status(201).json({ jobs });
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const job = await services.getById(id);

    res.status(201).json({ job });
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const data = req.body;
    const newJob = await services.create(data);

    res.status(201).json(newJob);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldData = req.body;
    const updatedJob = await services.update(id, oldData);

    res.status(201).json(updatedJob);
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const removeJob = await services.remove(id);

    res.status(201).json(removeJob);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
