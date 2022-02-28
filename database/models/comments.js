const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      comments.belongsTo(models.User, { as: 'id' });
      comments.belongsTo(models.Job, { as: 'id' });
    }
  }

  comments.init({
    id: {
      type: sequelize.UUID,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    job_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'comments',
    paranoid: true,
    timestamps: true,
  });

  return comments;
};
