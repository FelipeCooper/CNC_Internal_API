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
    async save(nome,email,setorId){
        let savedSetorMembro = new SetorMembro(nome,email,setorId);
        return (await SetorMembroRepository.save(savedSetorMembro));
    },
    async update(nome,email,setorId,id){
        let updatedSetorMembro = new SetorMembro(nome,email,setorId,id);
        return (await SetorMembroRepository.update(updatedSetorMembro));
    },
    async delete(id){
        return (await SetorMembroRepository.delete(id));
    },
    async readByEmail(email){
        let result =await SetorMembroRepository.readByEmail(email);
        if(result.length != 0){
            return result[0];
        }else{
            return {result: 'Não é um membro'}
        }
    },
    async verifica(email){
        let result = await SetorMembroRepository.readByEmail(email);
        if (result.length != 0){
            return result[0];
        }else{
            return({resultado: 'NaoAutorizado'})
        }
    }
}
module.exports = SetorMembroServices;