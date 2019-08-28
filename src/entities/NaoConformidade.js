const NaoConformidade = class NaoConformidade{
    constructor(setor,motivo,submotivo,condominio,responsavel,setorMembro,observacoes,setorResponsavel,franquia,data,id){
        this.franquia = franquia;
        this.setor = setor;
        this.motivo = motivo;
        this.submotivo = submotivo;
        this.condominio = condominio;
        this.responsavel = responsavel;
        this.setorMembro = setorMembro;
        this.observacoes = observacoes;
        this.setorResponsavel = setorResponsavel;
        this.data = data;
        this.id = id;
    }
    //----//
    values(){
        return(Array(this.setor, this.motivo, this.submotivo, this.condominio, this.setorMembro,this.responsavel,
            this.setorResponsavel,this.franquia,this.observacoes ));

    }
}

module.exports = NaoConformidade;





