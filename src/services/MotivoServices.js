const MotivoRepository = require('../repository/MotivoRepository');
const Motivo = require('../entities/Motivo');


const MotivoServices = {
    async read(){
        let result = await MotivoRepository.read();
        return result;
    },
    async readID(id){
        let result = await MotivoRepository.readId(id);
        return result[0];
    },
    async save(titulo){
        let savedMotivo = new Motivo(titulo);
        return (await MotivoRepository.save(savedMotivo));
    },
    async update(titulo,id){
        let updatedMotivo = new Motivo(titulo,id);
        return (await MotivoRepository.update(updatedMotivo));
    },
    async delete(id){
        return (await MotivoRepository.delete(id));
    }
}
module.exports = MotivoServices;