const SetorMembro = class SetorMembro{
    constructor(nome,email,setor,id){
        this.nome = nome;
        this.email = email;
        this.setor = setor;
        this.id = id;
    }
    values(){
        return(Array(this.nome,this.email,this.setor));

    }
}

module.exports = SetorMembro;