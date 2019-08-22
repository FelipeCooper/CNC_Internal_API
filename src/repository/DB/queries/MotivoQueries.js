module.exports = {
    insert_nc_motivos: `INSERT INTO nc_motivos (titulo) VALUES(?)`,
    readID_nc_motivos:   `SELECT * FROM nc_motivos WHERE id = ?`,
    read_nc_motivos:   `SELECT * FROM nc_motivos`,
    update_nc_motivos: `UPDATE nc_motivos SET nc_motivos.titulo = ? WHERE nc_motivos.id = ?`,
    delete_nc_motivos: `DELETE FROM nc_motivos WHERE nc_motivos.id = ?`
}