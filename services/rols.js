const repository = require('../repositories/jobs');


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


const remove = () => {
    try {
        const removeRol = repository.remove();
        return removeRol;

    } catch (err) {
        throw new Error(err);
    };
};

module.exports = {
    getById,
    create,
    remove
}