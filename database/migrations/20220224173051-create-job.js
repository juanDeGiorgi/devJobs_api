/* eslint-disable no-unused-vars */
const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Jobs', {
      id: {
        type: DataTypes.UUID,
      },
      name: {
        type: DataTypes.STRING(255),
      },
      seniority: {
        type: DataTypes.STRING(255),
      },
      description: {
        type: DataTypes.STRING(255),
      },
      requeriments: {
        type: DataTypes.STRING(255),
      },
      responsabilitys: {
        type: DataTypes.STRING(255),
      },
      salary: {
        type: DataTypes.FLOAT,
      },
      type: {
        type: DataTypes.STRING(255),
      },
      remote: {
        type: DataTypes.TINYINT,
      },
      company_id: {
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Jobs');
  },
};
