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
routes.get('/mostrar', async (req, res) => {
    let result = await NaoConformidadesServices.read();
    let todasNaoConformidades = result.map(async (naoConformidade) => {     //Resolve Promisses
        let setor = await getSetor(naoConformidade.setor_id);
        let setorResponsavel = await getSetor(naoConformidade.setor_responsavel);
        let franquia = await getFranquia(naoConformidade.franquia_id);
        let motivo = await getMotivo(naoConformidade.motivo_id);
        let submotivo = await getSubmotivo(naoConformidade.submotivo_id);
        let responsavel = await getSetorMembro(naoConformidade.responsavel_id)
        function pad(n) {return n < 10 ? "0"+n : n;}
        var data = pad(naoConformidade.data_criado.getDate())+"/"+pad(naoConformidade.data_criado.getMonth()+1)+"/"+naoConformidade.data_criado.getFullYear();

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
    Promise.all(todasNaoConformidades).then(resultado => {
        console.log(resultado)
        res.render('pages/mostrar',{
            cnc: resultado
          })
    });
})
//REGISTRAR//
routes.get('/registrar', async (req,res)=>{
    let setores = await SetoresServices.read();
    res.render('pages/registrar',{
        setores: setores
    })
})

// BUSCAR INFORMAÇOES//
routes.post('/motivos', async (req,res) =>{
    let motivos = await MotivoServices.motivoHasSetor(req.body.setor_id);
    let todosMotivos = motivos.map(async (motivo) => {
        return await MotivoServices.readID(motivo.motivo_id)
     })
     Promise.all(todosMotivos).then(resultado => {
        console.log(resultado)
        res.json(resultado)
    });
})
routes.post('/submotivos', async (req,res) =>{
    let submotivos = await SubmotivoServices.submotivoHasMotivo(req.body.motivo_id);
    let todosSubmotivos = submotivos.map(async (submotivo) => {
        return await SubmotivoServices.readID(submotivo.submotivo_id)
     })
     Promise.all(todosSubmotivos).then(resultado => {
        console.log(resultado)
        res.json(resultado)
    });
})





//Functions Auxiliares//

function getSetor(setorId) {
    return new Promise(async resolve => {
        resolve(await SetoresServices.readID(setorId));
    });
}
function getFranquia(franquiaId) {
    return new Promise(async resolve => {
        resolve(await FranquiaServices.readID(franquiaId));
    });
}
function getMotivo(motivoId) {
    return new Promise(async resolve => {
        resolve(await MotivoServices.readID(motivoId));
    });
}
function getSubmotivo(submotivoId) {
    return new Promise(async resolve => {
        resolve(await SubmotivoServices.readID(submotivoId));
    });
}
function getSetorMembro(setormembroId) {
    return new Promise(async resolve => {
        resolve(await SetorMembroServices.readID(setormembroId));
    });
}

module.exports = routes;
