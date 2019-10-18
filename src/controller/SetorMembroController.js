const express = require('express');
const routes = express.Router();
const SetorMembroServices = require('../services/SetorMembroServices')

routes.post('/mostrarByEmail', async (req, res) => {
    let result = await SetorMembroServices.readByEmail(req.body.email);
    res.json(result);
})
routes.post('/mostrarBySetor', async (req, res) => {
    let result = await SetorMembroServices.readBySetor(req.body.setor_id);
    res.json(result);
})
routes.post('/registrar', (req, res) => {
    let result = SetorMembroServices.save(req.body.nome, req.body.email, req.body.setor_id);
    res.json(result);
})
routes.post('/deletar', async (req, res) => {
    res.json(await SetorMembroServices.delete(req.body.setorMembro_id))
})
routes.put('/atualizar', async (req, res) => {
    let result = SetorMembroServices.update(req.body.nome, req.body.email, req.body.setor_id, req.body.id);
    res.json(result);
})
module.exports = routes;