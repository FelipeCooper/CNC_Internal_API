const SubmotivoRepository = require('../repository/SubmotivoRepository');
const Submotivo = require('../entities/Submotivo');


const SubmotivoServices = {
    async read(){
        let result = await SubmotivoRepository.read();
        return result;
    },
    async readID(id){
        let result = await SubmotivoRepository.readId(id);
        return result[0];
    },
    async save(titulo){
        let savedSubmotivo = new Submotivo(titulo);
        return (await SubmotivoRepository.save(savedSubmotivo));
    },
    async update(titulo,id){
        let updatedSubmotivo = new Submotivo(titulo,id);
        return (await SubmotivoRepository.update(updatedSubmotivo));
    },
    async delete(id){
        return (await SubmotivoRepository.delete(id));
    },
    async submotivoHasMotivo(idSetor){
        let submotivoHasMotivo = await SubmotivoRepository.submotivoHasMotivo(idSetor);
        return submotivoHasMotivo;
    }
}
module.exports = SubmotivoServices;