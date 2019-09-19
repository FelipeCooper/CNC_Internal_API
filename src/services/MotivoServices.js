const MotivoRepository = require('../repository/MotivoRepository');
const Motivo = require('../entities/Motivo');


const MotivoServices = {
    async read() {
        let result = await MotivoRepository.read();
        return result;
    },
    async readID(id) {
        let result = await MotivoRepository.readId(id);
        return result[0];
    },
    async save(titulo) {
        let savedMotivo = new Motivo(titulo);
        return (await MotivoRepository.save(savedMotivo));
    },
    async update(titulo, id) {
        let updatedMotivo = new Motivo(titulo, id);
        return (await MotivoRepository.update(updatedMotivo));
    },
    async delete(id) {
        return (await MotivoRepository.delete(id));
    },
    async motivoHasSetor(idSetor) {
        let motivosHasSetor = await MotivoRepository.motivoHasSetor(idSetor);
        return motivosHasSetor;
    },
    async motivoLinkSetor(motivo_id, setor_id) {
        let result = await MotivoRepository.motivoHasSetor(setor_id);
        let existe = false;
        for (let i = 0; i < result.length; i++) {
            if (result[i].motivo_id == motivo_id) {
                existe = true;
            }
        }
        console.log(existe)
        if (existe) {
            return { result: false }
        } else {
            return await MotivoRepository.motivoLinkSetor(motivo_id, setor_id);
        }
    }

}
module.exports = MotivoServices;