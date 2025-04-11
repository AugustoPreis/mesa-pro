const { Sequelize } = require('sequelize');
const { db } = require('../dotenv');

const { host, port, database, username, password } = db;

const sequelize = new Sequelize({
  dialect: 'postgres',
  logging: false,
  host,
  port,
  database,
  username,
  password,
});

module.exports = { sequelize };