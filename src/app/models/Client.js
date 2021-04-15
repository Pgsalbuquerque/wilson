const { Model } = require("sequelize");
const Sequelize = require("sequelize");

class Client extends Model {
    static init (sequelize){
        super.init(
        {
            id: {
                type: Sequelize.NUMBER,
                autoIncrement: true,
            },
            cpf: {
                type: Sequelize.STRING,
                primaryKey: true,
            }
        },
        {
            sequelize,
            tableName: "client"
        })

        return this;
    }
}

module.exports = Client;