module.exports = {
    insert_nc_admin: `INSERT INTO nc_admin (nome,email) VALUES(?)`,
    readID_nc_admin:   `SELECT * FROM nc_admin WHERE id = ?`,
    readByEmail_nc_admin:   `SELECT * FROM nc_admin WHERE email = ?`,
    update_nc_admin: `UPDATE nc_admin SET nc_admin.nome = ?, nc_admin.email = ? WHERE nc_admin.id = ?`,
    delete_nc_admin: `DELETE FROM nc_admin WHERE nc_admin.id = ?`
}