const express = require('express');
const routes = express.Router();
const MotivoServices = require('../services/MotivoServices')

routes.get('/mostrar', async (req, res) => {
    let result = await MotivoServices.read();
    res.json(result);
})
routes.post('/cadastrar', async (req, res) => {
    console.log(req.body)
    let result = await MotivoServices.save(req.body.titulo);
    res.json(result);
})
routes.delete('/deletar', async (req, res) => {
    res.json(await MotivoServices.delete(req.body.id))
})
routes.put('/atualizar', async (req, res) => {
    let result = await MotivoServices.update(req.body.titulo, req.body.id);
    res.json(result);
})
routes.post('/motivoLinkSetor', async (req, res) => {
    let result = await MotivoServices.motivoLinkSetor(req.body.motivo_id, req.body.setor_id);
    res.json(result);
})
routes.post('/motivoUnlinkSetor', async (req, res) => {
    let result = await MotivoServices.motivoUnlinkSetor(req.body.motivo_id, req.body.setor_id);
    res.json(result);
})
routes.post('/setor', async (req, res) => {
    let motivos = await MotivoServices.motivoHasSetor(req.body.setor_id);
    let todosMotivos = motivos.map(async (motivo) => {
        return await MotivoServices.readID(motivo.motivo_id)
    })
    Promise.all(todosMotivos).then(resultado => {
        res.json(resultado)
    });
})
module.exports = routes;