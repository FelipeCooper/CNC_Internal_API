const express = require('express');
const routes = express.Router();
const SubmotivoServices = require('../services/SubmotivosServices');

routes.post('/mostrar', async (req, res) => {
    let result = await SubmotivoServices.read();
    res.json(result);
})
routes.post('cadastrar',async (req, res) => {
    let result = await SubmotivoServices.save(req.body.titulo);
    res.json(result);
})
routes.delete('/deletar', async (req, res) => {
    res.json(await SubmotivoServices.delete(req.body.id))
})
routes.put('/atualizar', async (req, res) => {
    let result = await SubmotivoServices.update(req.body.titulo, req.body.id);
    res.json(result);
})
routes.post('/motivo', async (req, res) => {
    let submotivos = await SubmotivoServices.submotivoHasMotivo(req.body.motivo_id);
    let todosSubmotivos = submotivos.map(async (submotivo) => {
        return await SubmotivoServices.readID(submotivo.submotivo_id)
    })
    Promise.all(todosSubmotivos).then(resultado => {
        res.json(resultado)
    });
})
module.exports = routes;