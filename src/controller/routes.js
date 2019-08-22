const express = require('express');
const routes = express.Router();
const NaoConformidadesServices = require('../services/NaoConformidadeServices');
const SetoresServices = require('../services/SetorServices');
const NaoConformidades = require('../entities/NaoConformidade')

routes.get('/mostrar', async (req, res) => {
    let result = await NaoConformidadesServices.read();

    let cnc = Object.keys(result).map(function (key) {
        return result[key];
    });
    let todasNaoConformidades = cnc.map(async (naoConformidade) => {
        let setor = await getSetor(naoConformidade.setor_id);
        let resultado = new NaoConformidades(setor[0].titulo)
        return (resultado)
    });
    Promise.all(todasNaoConformidades).then(resultado => {
        console.log(resultado)
        res.json(result);
    });

})




module.exports = routes;

//Functions Auxiliares//

function getSetor(setorId) {
    return new Promise(async resolve => {
        resolve(await SetoresServices.readID(setorId));
    });
}