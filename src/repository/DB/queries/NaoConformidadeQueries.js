module.exports = {
    insert_nc_cadastro: `INSERT INTO nc_cadastro (setor_id, motivo_id, submotivo_id, condominio, responsavel_id, responsavel, setor_responsavel, franquia) VALUES(?)`,
    read_nc_cadastro:   `SELECT * FROM nc_cadastro`,
    readBySetor_nc_cadastro:   `SELECT * FROM nc_cadastro WHERe setor_responsavel = ?`,
    //update_nc_cadastro: `UPDATE nc_cadastro SET nc_cadastro.street  = ?, nc_cadastro.district  = ?, nc_cadastro.cep = ?, nc_cadastro.city = ? WHERE nc_cadastro.id = ?`,
    //delete_nc_cadastro: `DELETE FROM nc_cadastro WHERE nc_cadastro.id = ?`
    //Não é ´possivel apagar ou fazer update de uma não conformidade, elas apenas podem ser vistas e escritas.
}