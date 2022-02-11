const aplicantsService = require('../services/aplicants');

const getAll = async (req, res, next) => {
  try {
    const aplicants = await aplicantsService.getAll();
    res.json(aplicants);
  } catch (error) {
    next(error);
  }
};
const getById = async (req, res, next) => {
  try {
    const aplicant = await aplicantsService.getById();
    res.json(aplicant);
  } catch (error) {
    next(error);
  }
};
module.exports = { getAll, getById };
