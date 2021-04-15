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


routes.post("/comprarpassagem", async function (req, res) {
    const infos = req.body

    if (infos.cpf.length > 11) {
        return res.send({"error": "cpf tem mais de 11 caracters"})
    }

    const client = await Client.finOne({where: {"cpf": infos.cpf}})

    if (client == null) {
        return res.send({"error": "esse usuario nao existe"})
    }

    const cidadeDestino = await Cidade.finOne({where: {"nomecidade": infos.destino}})

    if (cidadeDestino == null) {
        return res.send({"error": "cidade nao existe no banco de dados"})
    }

    const cidadePartida = await Cidade.finOne({where: {"nomecidade": infos.partida}})

    if (cidadePartida == null) {
        return res.send({"error": "cidade partida nao existe no banco de dados"})
    }

    await Passagem.create({"cpf": infos.cpf, "destino_id": cidadeDestino.id, "partida": infos.partida})

    //await Address.create({cep, number, street, complement, city, district, employee_cpf, provider_cnpj, client_cpf});
    //const cidade = await Employee.findOne({where: {cpf: employee_cpf}});

    return res.send({"status": "success"})
})

routes.delete("/deletarpassagem", async function (req, res) {
    const infos = req.body

    const passagem = await Passagem.findOne({where: {"cod_passagem": infos.codigopassagem}});

    if (!passagem) return res.status(404).send({"error": "essa passagem nn existe"});

    await passagem.destroy();

    return res.send({"status": "success"})

})

routes.put("/modificarpassagem", async function (req, res) {
    const infos = req.body
    //{"cod_passagem": "4365475", "destino": "caruaru"}


    const passagem = await Passagem.findOne({where: {"cod_passagem": infos.cod_passagem}});

    if (!passagem) return res.status(404).send({"error": "essa passagem nn existe"});

    passagem.destino = infos.destino;

    passagem.save();

    return res.send({"status": "success"})

})

routes.get("/listartodaspassagens", async function (req, res) {
    const ArrayDePassagens = await Passagem.findAll()

    if (!ArrayDePassagens) return res.send({"error": "nao tem nenhuma passagem"})

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