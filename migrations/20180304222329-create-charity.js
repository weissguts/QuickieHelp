'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Charities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      organization: {
        type: Sequelize.STRING
      },
      orgwebsite: {
        type: Sequelize.STRING
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      eventname: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      eventdate: {
        type: Sequelize.DATE
      },
      eventtime: {
        type: Sequelize.TIME
      },
      eventlocation: {
        type: Sequelize.STRING
      },
      userinterestdescription: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATETIME
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATETIME
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Charities');
  }
};