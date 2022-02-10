const services = require('../services/comments');

const getAll = async (req,res,next) => {
    try {
        const comments = await services.getAll();
        return res.status(201).json({ comments });

    } catch (err) {
        next(err);
    };
};

const getById = async (req,res,next) => {
    try {
        const id = req.params.id;
        const comment = await services.getById(id);
        return res.status(201).json({ comment });

    } catch (err) {
        next(err);
    };
};

const create = async (req,res,next) => {
    try {
        const data = req.body;
        const newComment = await services.create(data);
        return res.status(201).json(newComment);

    } catch (err) {
        next(err);
    };
};

const update = async (req,res,next) => {
    try {
        const id = req.params.id;
        const oldData = req.body;
        const updateComment = await services.update(id,oldData);
        return res.status(201).json({ updateComment });

    } catch (err) {
        next(err);
    };
};

const remove = async (req,res,next) => {
    try {
        const id = req.params.id;
        const removeComment = await services.remove(id);
        return res.status(201).json({ removeComment });

    } catch (err) {
      next(err);  
    };
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}