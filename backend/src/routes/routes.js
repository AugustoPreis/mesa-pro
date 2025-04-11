const { Router } = require('express');
const restauranteRoutes = require('./restauranteRoutes');

const routes = Router();

routes.use('/restaurantes', restauranteRoutes);

module.exports = { routes };