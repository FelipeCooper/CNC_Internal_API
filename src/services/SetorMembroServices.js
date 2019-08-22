const SetorMembroRepository = require('../repository/SetorMembroRepository');
const SetorMembro = require('../entities/SetorMembro');


const SetorMembroServices = {
    async read(){
        let result = await SetorMembroRepository.read();
        return result;
    },
    async readID(id){
        let result = await SetorMembroRepository.readId(id);
        return result[0];
    },
    async save(titulo){
        let savedSetorMembro = new SetorMembro(titulo);
        return (await SetorMembroRepository.save(savedSetorMembro));
    },
    async update(titulo,id){
        let updatedSetorMembro = new SetorMembro(titulo,id);
        return (await SetorMembroRepository.update(updatedSetorMembro));
    },
    async delete(id){
        return (await SetorMembroRepository.delete(id));
    }
}
module.exports = SetorMembroServices;