const queries = require('./DB/queries/AdminQueries');
const dbConnection = require('./DB/config/Connection');

const AdminRepository = {
    async save(Admin) {
        let con = await dbConnection();
        try {
            await con.query('START TRANSACTION');
            let savedAdmin = await con.query(queries.insert_nc_admin, [
                Admin.nome,
                Admin.email,
            ]);
            await con.query('COMMIT');
            Admin.id = savedAdmin.insertId;
            return Admin;
        }
        catch (ex) {
            await con.query('ROLLBACK');
            console.log(ex);
            throw ex;
        }
        finally {
            await con.destroy();
            await con.release();
        }
    },
    //------//
    async readId(id) {
        let con = await dbConnection();
        try {
            await con.query("START TRANSACTION");
            let Admins = await con.query(queries.readID_nc_admin, [id]);
            await con.query('COMMIT');
            return Admins;
        }
        catch (ex) {
            await con.query('ROLLBACK');
            console.log(ex);
            throw ex;
        }
        finally {
            await con.destroy();
            await con.release();
        }
    },
    //------//
    async update(Admin) {
        let con = await dbConnection();
        try {
            await con.query('START TRANSACTION');
            let updatedAdmin = await con.query(queries.update_nc_admin, [
                Admin.nome,
                Admin.email,
                Admin.id
            ]);
            await con.query('COMMIT');
            return updatedAdmin;
        }
        catch (ex) {
            await con.query('ROLLBACK');
            console.log(ex);
            throw ex;
        }
        finally {
            await con.destroy();
            await con.release();
        }
    },
    //--------///
    async delete(id) {
        let con = await dbConnection();
        try {
            await con.query('START TRANSACTION');
            await con.query(queries.delete_nc_admin, [id]);
            await con.query('COMMIT')
            return true;
        }
        catch (ex) {
            await con.query('ROLLBACK');
            console.log(ex);
            throw ex;
        }
        finally {
            await con.destroy();
            await con.release();
        }
    },
    //------//
    async read() {
        let con = await dbConnection();
        try {
            await con.query("START TRANSACTION");
            let result = await con.queries(queries.read_nc_admin);
            await con.query('commit');
            return result;
        }
        catch (ex) {
            con.query('ROLLBACK');
            console.log(ex);
            throw ex;
        }
        finally {
            await con.destroy();
            await con.release();
        }
    },
    //-------//
    async readByEmail(email) {
        let con = await dbConnection();
        try {
            await con.query('START TRANSACTION');
            let result = await con.query(queries.readByEmail_nc_admin, [email]);
            await con.query('COMMIT');
            return result;
        }
        catch (ex) {
            await con.query('ROLLBACK');
            console.log(ex)
            throw ex;
        }
        finally {
            await con.destroy();
            await con.release();
        }
    }
}

module.exports = AdminRepository;