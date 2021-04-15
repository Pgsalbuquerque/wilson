const { Model } = require("sequelize");
const Sequelize = require("sequelize");

class Passagem extends Model {
    static init (sequelize){
        super.init(
        {
            id: {
                type: Sequelize.NUMBER,
                primaryKey: true,
                autoIncrement: true,
            },
        },
        {
            sequelize, 
            tableName: "passagem"
        })

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Client, {foreignKey: "client_cpf"});
        this.belongsTo(models.Cidade, {foreignKey: "cidade_destino"});
        this.belongsTo(models.Cidade, {foreignKey: "cidade_partida"});
    }
}

module.exports = Passagem;