const express = require('express');
const routes = express.Router();
const AdminServices = require('../services/AdminServices')

routes.post('/mostrarByEmail', async (req, res) => {
    let result = await AdminServices.readByEmail(req.body.email);
    res.json(result);
})
routes.post('cadastrar', (req, res) => {
    let result = AdminServices.save(req.body.nome, req.body.email);
    res.json(result);
})
routes.delete('/deletar', async (req, res) => {
    res.json(await AdminServices.delete(req.body.id))
})
routes.put('/atualizar', async (req, res) => {
    let result = AdminServices.update(req.body.nome, req.body.email, req.body.id);
    res.json(result);
})
routes.post('/verifica', async(req,res)=>{
    let result = await AdminServices.verifica(req.body.email);
    res.json(result);
})
module.exports = routes;