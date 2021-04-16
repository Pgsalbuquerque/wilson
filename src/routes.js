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

    const array = await Cidade.findAll()

    return res.send({"resposta": array})

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

routes.post("/teste4", async function (req, res) {

    const {cpf, destino, partida} = req.body

    const passagem = await Passagem.create({client_cpf: cpf, cidade_destino: destino, cidade_partida: partida})

    return res.send({passagem})
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