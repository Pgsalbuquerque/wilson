const { Model } = require("sequelize");
const Sequelize = require("sequelize");

class Passagem extends Model {
    static init (sequelize){
        super.init(
        {
            id: {
                type: Sequelize.NUMBER,
                primaryKey: true,
            },
            destino: {
                type: Sequelize.STRING,
            },
            partida: {
                type: Sequelize.STRING,
            },
            hora: {
                type: Sequelize.DATE,
            }
        },
        {
            sequelize
        })

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Client, {foreignKey: "client_cpf"});
    }
}

module.exports = Passagem;