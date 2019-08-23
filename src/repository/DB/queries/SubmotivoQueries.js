module.exports = {
    insert_nc_submotivos: `INSERT INTO nc_submotivos (titulo) VALUES(?)`,
    readID_nc_submotivos:   `SELECT * FROM nc_submotivos WHERE id = ?`,
    read_nc_submotivos:   `SELECT * FROM nc_submotivos`,
    update_nc_submotivos: `UPDATE nc_submotivos SET nc_submotivos.titulo = ? WHERE nc_submotivos.id = ?`,
    delete_nc_submotivos: `DELETE FROM nc_submotivos WHERE nc_submotivos.id = ?`,
    submotivo_has_motivo: `SELECT * FROM nc_submotivos_has_motivo WHERE motivo_id = ?`
}