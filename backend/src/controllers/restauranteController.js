const { StatusCodes } = require('http-status-codes');
const { restauranteService } = require('../services/restauranteService');

class RestauranteController {

  async buscarPorId(req, res, next) {
    try {
      const result = await restauranteService.buscarPorId(parseInt(req.params.idRestaurante));

      res.status(StatusCodes.OK).json(result);
    } catch (err) {
      next(err);
    }
  }

  async buscarLogo(req, res, next) {
    try {
      const result = await restauranteService.buscarLogo(parseInt(req.params.idRestaurante));

      res.set('Content-Type', 'image/png');
      res.set('Content-Disposition', 'inline; filename=logo.png');
      res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.set('Pragma', 'no-cache');
      res.set('Expires', '0');
      res.set('Content-Length', result?.length || 0);

      res.status(StatusCodes.OK).send(result);
    } catch (err) {
      next(err);
    }
  }

  async atualizar(req, res, next) {
    try {
      const result = await restauranteService.atualizar(parseInt(req.params.idRestaurante), req.body);

      res.status(StatusCodes.OK).json(result);
    } catch (err) {
      next(err);
    }
  }

  async atualizarLogo(req, res, next) {
    try {
      const result = await restauranteService.atualizarLogo(parseInt(req.params.idRestaurante), req.file);

      res.status(StatusCodes.OK).json(result);
    } catch (err) {
      next(err);
    }
  }
}

const restauranteController = new RestauranteController();

module.exports = { restauranteController, RestauranteController }