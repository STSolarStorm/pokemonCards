'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PokeCards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PokeCards.init({
    name: DataTypes.STRING,
    hitpoints: DataTypes.INTEGER,
    type_energy: DataTypes.STRING,
    image: DataTypes.STRING,
    attack1_energy1: DataTypes.STRING,
    attack1_energy2: DataTypes.STRING,
    attack1_energy3: DataTypes.STRING,
    attackname1: DataTypes.STRING,
    attackdam: DataTypes.STRING,
    attack2_energy1: DataTypes.STRING,
    attack2_energy2: DataTypes.STRING,
    attack2_energy3: DataTypes.STRING,
    attackname2: DataTypes.STRING,
    attackdam2: DataTypes.STRING,
    weakness_energy: DataTypes.STRING,
    resistance_energy: DataTypes.STRING,
    retreat_cost1: DataTypes.STRING,
    retreat_cost2: DataTypes.STRING,
    type: DataTypes.STRING


  }, {
    sequelize,
    modelName: 'PokeCards',
    timestamps: false,
    tableName: 'pokemoncards'
  });
  return PokeCards;
};