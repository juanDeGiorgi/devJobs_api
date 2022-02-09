const repository = require('../repositories/jobs');

const getAll = () => {
    try {
        const rols = repository.getAll();
        return rols

    } catch (err) {
        throw new Error(err);
    };
};

const getById = () => {
    try {
        const rol = repository.getById();
        return rol

    } catch (err) {
        throw new Error(err);
    };
};

const create = () => {
    try {
        const newRol = repository.create();
        return newRol;

    } catch (err) {
        throw new Error(err);
    };
};

const update =  () => {
    try {
        const updateRol = repository.update();
        return updateRol;

    } catch (err) {
        throw new Error(err);
    };
};

const remove = () => {
    try {
        const removeRol = repository.remove();
        return removeRol;

    } catch (err) {
        throw new Error(err);
    };
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}