const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class companies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  companies.init({
    id: DataTypes.UUID,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    site: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    location: DataTypes.STRING,
    employs: DataTypes.INTEGER,
    qualification: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'companies',
    paranoid: true,
    timestamps: true,
  });
  return companies;
};
