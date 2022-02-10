const services = require('../services/rols');

const getById = async (req,res,next) => {
    try {
        const {id} = req.params;
        const rol = await services.getById(id);
    
        res.status(201).json({ rol });

    } catch (err) {
        next(err);
    };
};

const create = async (req,res,next) => {
    try {
        const data = req.body;
        const newRol = services.create(data);
        res.status(201).json({ newRol });

    } catch (err) {
        next();
    };
};

const remove = async (req,res,next) => {
    try {
        const {id} = req.params;
        const removeRol = services.remove(id);
        res.status(201).json({ removeRol });

    } catch (err) {
        next(err);
    };
};

module.exports= {
    getById,
    create,
    remove
}