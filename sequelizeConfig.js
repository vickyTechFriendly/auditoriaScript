// sequelizeConfig.js
const Sequelize = require('sequelize');

module.exports = new Sequelize('thingsboard', 'thingsboard', 'my_password', {
  host: 'localhost',
  dialect: 'postgres',
  timezone: 'Europe/Madrid',
});
