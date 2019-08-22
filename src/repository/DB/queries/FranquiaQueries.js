module.exports = {
    insert_franquias_cadastro: `INSERT INTO franquias_cadastro (numero,titulo) VALUES(?)`,
    readID_franquias_cadastro:   `SELECT * FROM franquias_cadastro WHERE id = ?`,
    read_franquias_cadastro:   `SELECT * FROM franquias_cadastro`,
    update_franquias_cadastro: `UPDATE franquias_cadastro SET franquias_cadastro.titulo = ?, franquias_cadastro.numero = ? WHERE franquias_cadastro.id = ?`,
    delete_franquias_cadastro: `DELETE FROM franquias_cadastro WHERE franquias_cadastro.id = ?`
}