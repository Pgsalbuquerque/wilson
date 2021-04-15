const Sequelize = require('sequelize');

const databaseConfig = require('../config/database');

//models
const Passagem = require("../app/models/Passagem");
const Client = require("../app/models/Client");


const models = [Passagem, Client];

class Database {
    constructor(){
        this.init();
    }

    init(){
        this.connection = new Sequelize(databaseConfig);
        models
          .map(model => model.init(this.connection))
          .map(model => model.associate && model.associate(this.connection.models));
    }
}

module.exports = new Database();