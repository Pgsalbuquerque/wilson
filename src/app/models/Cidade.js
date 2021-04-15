const { Model } = require("sequelize");
const Sequelize = require("sequelize");

class Cidade extends Model {
    static init (sequelize){
        super.init(
        {
            id: {
                type: Sequelize.NUMBER,
                autoIncrement: true,
            },
            nome: {
                type: Sequelize.STRING,
                primaryKey: true,
            }
        },
        {
            sequelize,
            tableName: "cidade"
        })

        return this;
    }
}

module.exports = Cidade;