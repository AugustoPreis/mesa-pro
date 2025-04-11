require('dotenv/config');

const { logger } = require('node-backend-utils/utils');
const { sequelize } = require('./config/database/database');
const { init } = require('./server');

sequelize
  .authenticate()
  .then(() => {
    init();
  }).catch(() => {
    logger.error('Não foi possível conectar ao banco de dados');
    process.exit(1);
  });