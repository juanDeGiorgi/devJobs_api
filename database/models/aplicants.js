const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class aplicants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      aplicants.belongsTo(models.User, { as: 'user' });
      aplicants.belongsTo(models.Job, { as: 'job' });
    }
  }

  aplicants.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'aplicants',
    paranoid: true,
    timestamps: true,
  });
  return aplicants;
};
