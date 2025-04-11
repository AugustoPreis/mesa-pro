const multer = require('multer');
const { Router } = require('express');
const { restauranteHandler } = require('../middlewares/authHandler');
const { restauranteController } = require('../controllers/restauranteController');

const routes = Router();
const upload = multer();

routes.get('/:idRestaurante', [restauranteHandler], (req, res, next) => {
  restauranteController.buscarPorId(req, res, next);
});

routes.get('/:idRestaurante/logo', [restauranteHandler], (req, res, next) => {
  restauranteController.buscarLogo(req, res, next);
});

routes.put('/:idRestaurante', [restauranteHandler], (req, res, next) => {
  restauranteController.atualizar(req, res, next);
});

routes.put('/:idRestaurante/logo', [restauranteHandler, upload.any()], (req, res, next) => {
  restauranteController.atualizarLogo(req, res, next);
});

module.exports = routes;