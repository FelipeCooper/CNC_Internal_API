const SetorRepository = require('../repository/SetoresRepository');
const Setor = require('../entities/Setor');


const SetorServices = {
    async read(){
        let result = await SetorRepository.read();
        return result;
    },
    async readID(id){
        let result = await SetorRepository.readId(id);
        return result[0];
    },
    async save(titulo){
        let savedSetor = new Setor(titulo);
        return (await SetorRepository.save(savedSetor));
    },
    async update(titulo,id){
        let updatedSetor = new Setor(titulo,id);
        return (await SetorRepository.update(updatedSetor));
    },
    async delete(id){
        return (await SetorRepository.delete(id));
    }
}
module.exports = SetorServices;