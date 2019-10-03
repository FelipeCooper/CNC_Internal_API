const AdminRepository = require('../repository/AdminRepository');
const Admin = require('../entities/Admin');


const AdminServices = {
    async read(){
        let result = await AdminRepository.read();
        return result;
    },
    async readID(id){
        let result = await AdminRepository.readId(id);
        return result[0];
    },
    async save(nome,email){
        let savedAdmin = new Admin(nome,email);
        return (await AdminRepository.save(savedAdmin));
    },
    async update(nome,email,id){
        let updatedAdmin = new Admin(nome,email,id);
        return (await AdminRepository.update(updatedAdmin));
    },
    async delete(id){
        return (await AdminRepository.delete(id));
    },
    async readByEmail(email){
        let result =await AdminRepository.readByEmail(email);
        if(result.length != 0){
            return result[0];
        }else{
            return {result: 'Não é um membro'}
        }
    },
    async verifica(email){
        let result = await AdminRepository.readByEmail(email);
        if (result.length != 0){
            return {...result[0], resultado: 'Admin'};
        }else{
            return({resultado: 'NaoAutorizado'})
        }
    }
}
module.exports = AdminServices;