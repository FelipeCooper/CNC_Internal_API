const express = require('express');
const routes = express.Router();
const SetorMembroServices = require('../services/SetorMembroServices')

routes.post('/mostrarByEmail', async (req, res) => {
    let result = await SetorMembroServices.readByEmail(req.body.email);
    res.json(result);
})
routes.post('cadastrar', (req, res) => {
    let result = SetorMembroServices.save(req.body.nome, req.body.email, req.body.setor_id);
    res.json(result);
})
routes.delete('/deletar', async (req, res) => {
    res.json(await SetorMembroServices.delete(req.body.id))
})
routes.put('/atualizar', async (req, res) => {
    let result = SetorMembroServices.update(req.body.nome, req.body.email, req.body.setor_id, req.body.id);
    res.json(result);
})
routes.post('/verifica', async(req,res)=>{
    let result = await SetorMembroServices.verifica(req.body.email);
    res.json(result);
})
module.exports = routes;