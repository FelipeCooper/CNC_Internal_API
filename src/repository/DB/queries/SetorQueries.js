module.exports = {
    insert_nc_setores: `INSERT INTO nc_setores (titulo) VALUES(?)`,
    readID_nc_setores:   `SELECT * FROM nc_setores WHERE id = ?`,
    read_nc_setores:   `SELECT * FROM nc_setores`,
    update_nc_setores: `UPDATE nc_setores SET nc_setores.titulo = ? WHERE nc_setores.id = ?`,
    delete_nc_setores: `DELETE FROM nc_setores WHERE nc_setores.id = ?`
}