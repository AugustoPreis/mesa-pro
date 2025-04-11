const express = require('express');
const bodyParser = require('body-parser');
const { logger } = require('node-backend-utils/utils');
const { version } = require('../package.json');
const { errorHandler } = require('./middlewares/errorHandler');
const { port } = require('./config/dotenv');

function init() {
  const app = express();

  app.use(bodyParser.json());
  app.use(errorHandler);

  app.listen(port, () => {
    logger.info(`Servidor iniciado na porta ${port}, v${version}`);
  });

  return app;
}

module.exports = { init };