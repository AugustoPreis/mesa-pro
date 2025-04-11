const { ForbiddenError, BadRequestError } = require('node-backend-utils/classes');
const { isValidNumber } = require('node-backend-utils/validators');

function restauranteHandler(req, _, next) {
  const id = parseInt(req.params.idRestaurante);

  if (isNaN(parseInt(id)) || !isValidNumber(parseInt(id), { min: 1 })) {
    throw new BadRequestError('Identificador do restaurante não informado ou inválido');
  }

  if (id != req.user?.restaurante?.id) {
    throw new ForbiddenError('Você não tem permissão para acessar este restaurante');
  }

  next();
}

module.exports = { restauranteHandler };