const NaoConformidadesRepository = require('../repository/NaoConformidadeRepository');
const NaoConformidade = require('../entities/NaoConformidade');

const NaoConformidadeServices = {
    async save (setor,motivo,submotivo,condominio,responsavel,setorMembro,observacoes,setorResponsavel,franquia){
        let savedNaoConformidade = new NaoConformidade(setor,motivo,submotivo,condominio,responsavel,setorMembro,observacoes,setorResponsavel,franquia);
        console.log(savedNaoConformidade)
        let result = await NaoConformidadesRepository.save(savedNaoConformidade);
        return ({resultado: result})
    },
    async read(data_start,data_end){
        let result = await NaoConformidadesRepository.read(data_start,data_end);
        return(result);
    },
    async readBySetor(setorId,data_start,data_end){
        let result = await NaoConformidadesRepository.readBySetor(setorId,data_start,data_end);
        return(result);
    }
}

module.exports = NaoConformidadeServices;