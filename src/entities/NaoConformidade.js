const NaoConformidade = class NaoConformidade{
    constructor(setor,motivo,submotivo,condominio,responsavel,setorMembro,observacoes,setorResponsavel,franquia){
        this.franquia = franquia;
        this.setor = setor;
        this.motivo = motivo;
        this.submotivo = submotivo;
        this.condominio = condominio;
        this.responsavel = responsavel;
        this.setorMembro = setorMembro;
        this.observacoes = observacoes;
        this.setorResponsavel = setorResponsavel;
    }
    //----//
}

module.exports = NaoConformidade;





