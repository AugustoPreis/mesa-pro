const { BadRequestError } = require('node-backend-utils/classes');
const { isValidString, isValidNumber } = require('node-backend-utils/validators');

class RestauranteValidator {
  static atualizar(dados) {
    if (!isValidString(dados.nome, { minLength: 1, maxLength: 100, trimToValidate: true })) {
      throw new BadRequestError('O nome é obrigatório e deve conter entre 1 e 100 caracteres');
    }

    if (!isValidString(dados.telefone, { minLength: 8, maxLength: 11, trimToValidate: true })) {
      throw new BadRequestError('O telefone é obrigatório e deve conter entre 8 e 11 caracteres');
    }

    if (!isValidString(dados.email, { minLength: 10, maxLength: 100, trimToValidate: true })) {
      throw new BadRequestError('O email é obrigatório e deve conter entre 10 e 100 caracteres');
    }

    if (isValidString(dados.rua) && !isValidString(dados.rua, { maxLength: 100, trimToValidate: true })) {
      throw new BadRequestError('A rua deve conter no máximo 100 caracteres');
    }

    if (isValidString(dados.numero) && !isValidString(dados.numero, { maxLength: 5, trimToValidate: true })) {
      throw new BadRequestError('O Nº deve conter no máximo 5 caracteres');
    }

    if (isValidString(dados.cep) && !isValidString(dados.cep, { minLength: 8, maxLength: 8, trimToValidate: true })) {
      throw new BadRequestError('O CEP deve conter 8 caracteres');
    }

    if (isValidString(dados.bairro) && !isValidString(dados.bairro, { maxLength: 50, trimToValidate: true })) {
      throw new BadRequestError('O bairro deve conter no máximo 50 caracteres');
    }

    if (isValidString(dados.cidade) && !isValidString(dados.cidade, { maxLength: 100, trimToValidate: true })) {
      throw new BadRequestError('A cidade deve conter no máximo 100 caracteres');
    }

    if (isValidString(dados.estado) && !isValidString(dados.estado, { minLength: 2, maxLength: 2, trimToValidate: true })) {
      throw new BadRequestError('A UF deve conter 2 caracteres');
    }
  }
}

module.exports = { RestauranteValidator };