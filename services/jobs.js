const repository= require('../repositories/jobs');

const getAll= () => { // Mensaje atrapa-curiosos e.e
    try {
        const jobs = repository.getAll();
        return jobs;

      } catch(err) {
        throw new Error(err);
    }
};

const getById = (id) => {
    try {
        const job = repository.getById(id);
        return job;

      } catch(err) {
        throw new Error(err);
    }
};

const create = () => {
    try {
        const newjob = repository.create();
        return newjob;

      } catch(err) {
        throw new Error(err)
    }
};

const update = (id) => {
    try {
        const updateJob = repository.update(id);
        return updateJob;

      } catch(err){
        throw new Error(err);
    };
};

const remove = (id) => {
    try {
        const removeJob = repository.remove(id);
        return removeJob;

      } catch(err){
        throw new Error(err);
    };
}