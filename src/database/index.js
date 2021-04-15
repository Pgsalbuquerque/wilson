const Sequelize = require('sequelize');

const databaseConfig = require('../config/database');

//models
const Passagem = require("../app/models/Passagem");
const Client = require("../app/models/Client");
const Cidade = require("../app/models/Cidade");

const models = [Passagem, Client, Cidade];

class Database {
    constructor(){
        this.init();
    }

    init(){
        this.connection = new Sequelize(databaseConfig);
        models
          .map(m => m.init(this.connection))
          .map(m => m.associate && m.associate(this.connection.models));
    }
}

module.exports = new Database();