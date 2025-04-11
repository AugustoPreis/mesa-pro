const { InternalError, RequestError } = require('node-backend-utils/classes');
const { logger } = require('node-backend-utils/utils');

function errorHandler(error, _, res, next) {
  const { statusCode, message } = formatError(error).getJSON();

  res.status(statusCode).json({ message });

  next();
}

function formatError(error) {
  if (error instanceof RequestError) {
    return error;
  }

  if (error instanceof Error) {
    return new InternalError(error.message);
  }

  if (typeof error === 'string') {
    return new InternalError(error.trim());
  }

  logger.warn(`Erro desconhecido no request: ${error}`);

  return new InternalError('Erro desconhecido');
}

module.exports = { errorHandler, formatError };