const { NotFoundError, BadRequestError } = require('node-backend-utils/classes');
const { Restaurante } = require('../models/Restaurante');
const { RestauranteValidator } = require('../validators/restauranteValidator');

class RestauranteService {

  async buscarPorId(id) {
    const restaurante = await Restaurante.findOne({ where: { id } });

    if (!restaurante) {
      throw new NotFoundError('Restaurante não encontrado');
    }

    return restaurante.toJSON();
  }

  async buscarLogo(id) {
    const restaurante = await Restaurante.findOne({
      where: { id },
      attributes: ['logo'],
    });

    if (!restaurante) {
      throw new NotFoundError('Restaurante não encontrado');
    }

    return restaurante.logo;
  }

  async atualizar(id, dados) {
    RestauranteValidator.atualizar({ ...dados, id });

    const restaurante = await Restaurante.findOne({ where: { id } });

    if (!restaurante) {
      throw new NotFoundError('Restaurante não encontrado');
    }

    restaurante.set('nome', dados.nome.trim());
    restaurante.set('telefone', dados.telefone.trim());
    restaurante.set('email', dados.email.trim());
    restaurante.set('rua', dados.rua?.trim());
    restaurante.set('numero', dados.numero?.trim());
    restaurante.set('cep', dados.cep?.trim());
    restaurante.set('bairro', dados.bairro?.trim());
    restaurante.set('cidade', dados.cidade?.trim());
    restaurante.set('estado', dados.estado?.trim());

    await restaurante.save();

    return restaurante.toJSON();
  }

  async atualizarLogo(id, logo) {
    if (!logo || !Buffer.isBuffer(logo.buffer)) {
      throw new BadRequestError('Logo não informada');
    }

    if (!logo.mimetype?.includes('image/')) {
      throw new BadRequestError('Logo deve ser uma imagem');
    }

    const restaurante = await Restaurante.findOne({ where: { id } });

    if (!restaurante) {
      throw new NotFoundError('Restaurante não encontrado');
    }

    restaurante.set('logo', logo.buffer.toString('base64'));

    await restaurante.save();

    const result = restaurante.toJSON();

    delete result.logo;

    return result;
  }

}

const restauranteService = new RestauranteService();

module.exports = { restauranteService, RestauranteService }