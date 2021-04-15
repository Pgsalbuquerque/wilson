const { Router } = require('express');

const routes = new Router();


//os models
const Passagem = require("./app/models/Passagem")
const Client = require("./app/models/Client")
const Cidade = require("./app/models/Cidade")

//get envia informações
//post cria uma informação no banco de dados
//delete deletar alguma coisa do banco de dados
//put alterar alguma coisa no banco de dados


routes.get("/teste", async function (req, res) {
    
    const destino = "bezerros"
    const partida = "caruaru"
    const cpf = "4540573890"


    const user = await Client.findOne({where: {"cpf": cpf}})

    if (!user) return res.send({"erro": "esse usuario nn existe"}) 

    const cidade_destino = await Cidade.findOne({where: {"nome": destino}})

    const passagem = await Passagem.create({"cidade_destino": destino, "cidade_partida": partida, "client_cpf": cpf})
    
    return res.send({"res": passagem})

})

routes.get("/teste2", async function (req, res) {

    const nome_cidade = "caruaru"

    const cidade = await Cidade.create({nome: nome_cidade});

    return res.send({"status": cidade})

})

routes.get("/teste3", async function (req, res) {
    
    const destino = "bezerros"
    const partida = "caruaru"
    const cpf = "1235734123"

    const passagem = await Passagem.create({client_cpf: cpf, cidade_partida: partida, cidade_destino: destino});

    return res.send({"status": passagem})

})

routes.get("/teste4", async function (req, res) {
    const ArrayDePassagens = await Passagem.findAll()

    return res.send(ArrayDePassagens)
})

routes.get("/listarporusuario", async function (req, res) {
    const infos = req.body
    // {"cpf": "1246775756"}

    const cliente = await Client.finOne({where: {"cpf": infos.cpf}})

    if (!cliente) return res.send({"error": "nao tem cliente"})

    const ArrayDePassagens = await Passagem.findAll({where: {"codcliente": cliente.codcliente}})

    if (!ArrayDePassagens) return res.send({"error": "nao tem nenhuma passagem"})

    return res.send(ArrayDePassagens)
})

module.exports = routes;