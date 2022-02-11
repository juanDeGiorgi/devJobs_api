const repository = require('../repositories/comments');

const getAll = () => {
  try {
    const comments = repository.getAll();
    return comments;
  } catch (err) {
    throw new Error(err);
  }
};

const getById = () => {
  try {
    const comment = repository.getById();
    return comment;
  } catch (err) {
    throw new Error(err);
  }
};

const create = () => {
  try {
    const newComment = repository.create();
    return newComment;
  } catch (err) {
    throw new Error(err);
  }
};

const update = () => {
  try {
    const updateComment = repository.update();
    return updateComment;
  } catch (err) {
    throw new Error(err);
  }
};

const remove = () => {
  try {
    const removeComment = repository.remove();
    return removeComment;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
