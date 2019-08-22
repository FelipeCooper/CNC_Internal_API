const express = require('express');
const routes = express.Router();
//---//
const NaoConformidades = require('../entities/NaoConformidade');
//---//
const NaoConformidadesServices = require('../services/NaoConformidadeServices');
const SetoresServices = require('../services/SetorServices');
const FranquiaServices = require('../services/FranquiaServices');
const MotivoServices = require('../services/MotivoServices');
const SubmotivoServices = require('../services/SubmotivosQueries');
//---//
routes.get('/mostrar', async (req, res) => {
    let result = await NaoConformidadesServices.read();

    let cnc = Object.keys(result).map(function (key) {
        return result[key];
    });
    let todasNaoConformidades = cnc.map(async (naoConformidade) => {
        let setor = await getSetor(naoConformidade.setor_id);
        let franquia = await getFranquia(naoConformidade.franquia_id);
        let motivo = await getMotivo(naoConformidade.motivo_id);
        let submotivo = await getSubmotivo(naoConformidade.submotivo_id);

        let resultado = new NaoConformidades(
            setor.titulo,
            motivo.titulo,
            submotivo.titulo,
            null,
            null,
            null,
            null,
            franquia.titulo
            );

        return (resultado)
    });
    Promise.all(todasNaoConformidades).then(resultado => {
        console.log(resultado)
        res.json(resultado);
    });

})




module.exports = routes;

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