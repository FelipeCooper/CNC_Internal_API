const express = require('express');
const routes = express.Router();
//---//
const NaoConformidades = require('../entities/NaoConformidade');
//---//
const NaoConformidadesServices = require('../services/NaoConformidadeServices');
const SetoresServices = require('../services/SetorServices');
const FranquiaServices = require('../services/FranquiaServices');
const MotivoServices = require('../services/MotivoServices');
const SubmotivoServices = require('../services/SubmotivosServices');
const SetorMembroServices = require('../services/SetorMembroServices')
//- MOSTRAR//
routes.post('/mostrar', async (req, res) => {
    if (req.body.usuario === 'admin') {
        var result = await NaoConformidadesServices.read();
    } else {
        var result = await NaoConformidadesServices.readBySetor(req.body.setor_id);
    }
    let todasNaoConformidades = result.map(async (naoConformidade) => {     //Cria Promises
        let setor = await getter(naoConformidade.setor_id, SetoresServices);
        let setorResponsavel = await getter(naoConformidade.setor_responsavel, SetoresServices);
        let franquia = await getter(naoConformidade.franquia_id, FranquiaServices);
        let motivo = await getter(naoConformidade.motivo_id, MotivoServices);
        let submotivo = await getter(naoConformidade.submotivo_id, SubmotivoServices);
        let responsavel = await getter(naoConformidade.responsavel_id, SetorMembroServices);
        function pad(n) { return n < 10 ? "0" + n : n; }
        var data = pad(naoConformidade.data_criado.getDate()) + "/" + pad(naoConformidade.data_criado.getMonth() + 1) + "/" + naoConformidade.data_criado.getFullYear();

        let resultado = new NaoConformidades(
            setor.titulo,
            motivo.titulo,
            submotivo.titulo,
            naoConformidade.condominio,
            naoConformidade.responsavel,
            responsavel.nome,
            naoConformidade.observacoes,
            setorResponsavel.titulo,
            franquia.titulo,
            data
        );
        return (resultado)
    });
    Promise.all(todasNaoConformidades).then(resultado => {  //resolve as promises
        res.json(resultado)
    });
})
// BUSCAR INFORMAÇOES//
routes.get('/setores', async (req, res) => {
    let setores = await SetoresServices.read();
    res.json(setores)
})
routes.post('/motivos', async (req, res) => {
    let motivos = await MotivoServices.motivoHasSetor(req.body.setor_id);
    let todosMotivos = motivos.map(async (motivo) => {
        return await MotivoServices.readID(motivo.motivo_id)
    })
    Promise.all(todosMotivos).then(resultado => {
        res.json(resultado)
    });
})
routes.post('/submotivos', async (req, res) => {
    let submotivos = await SubmotivoServices.submotivoHasMotivo(req.body.motivo_id);
    let todosSubmotivos = submotivos.map(async (submotivo) => {
        return await SubmotivoServices.readID(submotivo.submotivo_id)
    })
    Promise.all(todosSubmotivos).then(resultado => {
        res.json(resultado)
    });
})
routes.all('/franquias', async (req, res) => {
    let result = await FranquiaServices.read();
    res.json(result);
})
// Salvar informações
routes.post('/registrarNC', async (req,res) =>{
    let body = req.body;
    let result = await NaoConformidadesServices.save(body.setor_id, body.motivo_id, body.submotivo_id, body.condominio,
        body.responsavel, body.responsavel_id, body.obs, body.setor_id)
    res.json(result)
})

//Functions Auxiliares de Promises//
function getter(id, service) {
    return new Promise(async resolve => {
        resolve(await service.readID(id));
    });
}
module.exports = routes;
