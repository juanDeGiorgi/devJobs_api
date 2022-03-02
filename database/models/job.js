/* eslint-disable no-unused-vars */
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
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      validate: {
        isUUID: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 50],
        isAlpha: true,
      },
    },
    seniority: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 10],
        isAlpha: true,
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [50, 500],
        isAlpha: true,
      },
    },
    requeriments: {
      type: DataTypes.STRING,
    },
    responsabilitys: {
      type: DataTypes.STRING,
    },
    salary: DataTypes.FLOAT,
    type: {
      type: DataTypes.STRING,
    },
    remote: DataTypes.TINYINT,
    company_id: DataTypes.UUID,
  }, {
    sequelize,
    modelName: 'Job',
    paranoid: true,
  });
  return Job;
};
