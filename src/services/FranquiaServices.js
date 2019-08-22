const FranquiaRepository = require("../repository/FranquiaRepository");
const Franquia = require('../entities/Franquia');



const FranquiaServices = {
    async save(numero,titulo){
        let savedFranquia = new Franquia(numero,titulo);
        let result = await FranquiaRepository.save(savedFranquia);
        return result;
    },
    async read(){
        let result = await FranquiaRepository.read();
        return result;
    },
    async readID(id){
        let result = await FranquiaRepository.readId(id);
        if (typeof result[0] !== 'undefined'){
            result = result[0]
        }else{
            result = new Franquia(null,null,null);
        }
        return result;
    },
    async update(numero,titulo,id){
        let updatedFranquia = new Franquia(numero,titulo,id);
        let result = await FranquiaRepository.update(updatedFranquia);
        return result;
    },
    async delete(id){
        return (await FranquiaRepository.delete(id));
    }
}

module.exports = FranquiaServices;