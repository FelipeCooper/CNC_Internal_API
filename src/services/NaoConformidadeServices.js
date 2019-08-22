const NaoConformidadesRepository = require('../repository/NaoConformidadeRepository');
const NaoConformidade = require('../entities/NaoConformidade');

const NaoConformidadeServices = {
    async save (setor,motivo,submotivo,condominio,responsavel,observacoes,setorResponsavel,franquia){
        let savedNaoConformidade = new NaoConformidade(setor,motivo,submotivo,condominio,responsavel,observacoes,setorResponsavel,franquia);
        let result = await NaoConformidadesRepository.save(savedNaoConformidade);

        res.json({resultado: result})
    },
    async read(){
        let result = await NaoConformidadesRepository.read();
        return(result);
    }
}

module.exports = NaoConformidadeServices;