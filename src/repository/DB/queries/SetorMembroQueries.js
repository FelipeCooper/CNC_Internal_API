module.exports = {
    insert_setor_membros: `INSERT INTO setor_membros (nome,email,setor_id) VALUES(?)`,
    readID_setor_membros:   `SELECT * FROM setor_membros WHERE id = ?`,
    readByEmail_setor_membros:   `SELECT * FROM setor_membros WHERE email = ?`,
    update_setor_membros: `UPDATE setor_membros SET setor_membros.nome = ?, setor_membros.email = ?, setor_membros.setor_id = ? WHERE setor_membros.id = ?`,
    delete_setor_membros: `DELETE FROM setor_membros WHERE setor_membros.id = ?`
}