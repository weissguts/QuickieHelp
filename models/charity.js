'use strict';
module.exports = (sequelize, DataTypes) => {
  var Charity = sequelize.define('Charity', {
    organization: DataTypes.STRING,
    orgwebsite: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    title: DataTypes.STRING,
    email: DataTypes.STRING,
    eventname: DataTypes.STRING,
    description: DataTypes.STRING,
    eventdate: DataTypes.STRING,
    eventtime: DataTypes.STRING,
    eventlocation: DataTypes.STRING,
    userinterestdescription: DataTypes.STRING
  }, {});
  Charity.associate = function(models) {
    // associations can be defined here
  };
  return Charity;
};