const express = require('express');
const routes = express.Router();
const NaoConformidadesServices = require('../services/NaoConformidadeServices');
const SetoresServices = require('../services/SetorServices');


routes.get('/mostrar', async (req, res) => {
    let naoConformidades = await NaoConformidadesServices.read();
    var result = Object.keys(naoConformidades).map(function (key) {
        return naoConformidades[key];
    });
    let setores = result.map(async (cnc) => {
        return await getSetor(cnc.setor_id);
    });
    Promise.all(setores).then( resultado =>{
        console.log(resultado)
        res.json(resultado);
    }
    );

})

module.exports = routes;

//Functions Auxiliares//

function getSetor(setorId) {
    return new Promise(async resolve => {
        resolve(await SetoresServices.readID(setorId));
    });
}