const express = require('express');
const routes = express.Router();
const SetoresServices = require('../services/SetorServices');

routes.get('/mostrar', async (req, res) => {
    let setores = await SetoresServices.read();
    console.log(setores)
    res.json(setores)
})
routes.post('/registrar', async (req,res)=>{
    let result = await SetoresServices.save(req.body.titulo);
    res.json(result);
})
routes.delete('/deletar', async (req,res)=>{
    res.json(await SetoresServices.delete(req.body.id));
})
routes.put('/atualizar', async(req,res)=>{
    let result = await SetoresServices.update(req.body.titulo, req.body.id);
    res.json(result);
})

module.exports = routes;