const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database/database');

const Restaurante = sequelize.define('restaurantes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  logo: DataTypes.BLOB,

  nome: DataTypes.STRING(100),

  cnpj: DataTypes.CHAR(14),

  rua: DataTypes.STRING(100),

  numero: DataTypes.STRING(5),

  cep: DataTypes.CHAR(8),

  bairro: DataTypes.STRING(50),

  cidade: DataTypes.STRING(100),

  estado: DataTypes.CHAR(2),

  telefone: DataTypes.STRING(11),

  email: DataTypes.STRING(100),

  dataCadastro: {
    type: DataTypes.DATE,
    field: 'data_cadastro',
  },

  ativo: DataTypes.BOOLEAN,

}, {
  timestamps: false,
  defaultScope: {
    attributes: {
      exclude: ['logo'],
    },
  },
});

module.exports = { Restaurante };