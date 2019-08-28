const NaoConformidadesRepository = require('../repository/NaoConformidadeRepository');
const NaoConformidade = require('../entities/NaoConformidade');

const NaoConformidadeServices = {
    async save (setor,motivo,submotivo,condominio,responsavel,setorMembro,observacoes,setorResponsavel,franquia){
        let savedNaoConformidade = new NaoConformidade(setor,motivo,submotivo,condominio,responsavel,setorMembro,observacoes,setorResponsavel,franquia);
        console.log(savedNaoConformidade)
        let result = await NaoConformidadesRepository.save(savedNaoConformidade);
        return ({resultado: result})
    },
    async read(){
        let result = await NaoConformidadesRepository.read();
        return(result);
    },
    async readBySetor(setorId){
        let result = await NaoConformidadesRepository.readBySetor(setorId);
        return(result);
    }
}

module.exports = NaoConformidadeServices;