const express = require('express');
const routes = express.Router();
const FranquiaServices = require('../services/FranquiaServices');
//---//
routes.get('/mostrar', async (req, res) => {
    let result = await FranquiaServices.read();
    res.json(result);
})
routes.post('/registrar', async (req,res) =>{
 let result = await FranquiaServices.save(req.body.numero, req.body.titulo);
 res.json(result);
})
routes.delete('/deletar', async (req,res)=>{
    res.json(await FranquiaServices.delete(req.body.id));
})
routes.put('/atualizar',async (req,res)=>{
    let result = await FranquiaServices.update(req.body.numero, req.body.titulo);
    res.json(result);
})
module.exports = routes;
