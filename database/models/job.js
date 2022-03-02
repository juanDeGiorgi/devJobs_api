const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Job.init({
    name: DataTypes.STRING,
    seniority: DataTypes.STRING,
    description: DataTypes.STRING,
    requeriments: DataTypes.STRING,
    responsabilitys: DataTypes.STRING,
    salary: DataTypes.INTEGER,
    type: DataTypes.STRING,
    remote: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Job',
    paranoid: true,
  });
  return Job;
};
