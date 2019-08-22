const queries = require('./DB/queries/SubmotivoQueries');
const dbConnection = require('./DB/config/Connection');

const SubmotivoRepository = {
    async save(Submotivo) {
        let con = await dbConnection();
        try {
            await con.query('START TRANSACTION');
            let savedSubmotivo = await con.query(queries.insert_nc_submotivos, [Submotivo.titulo]);
            await con.query('COMMIT');
            Submotivo.id = savedSubmotivo.insertId;
            return Submotivo;
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
            let submotivos = await con.query(queries.readID_nc_submotivos, [id]);
            await con.query('COMMIT');
            return submotivos;
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
    async update(Submotivo) {
        let con = await dbConnection();
        try {
            await con.query('START TRANSACTION');
            let updatedSubmotivo = await con.query(queries.update_nc_submotivos, [
                Submotivo.titulo,
                Submotivo.id
            ]);
            await con.query('COMMIT');
            return updatedSubmotivo;
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
            await con.query(queries.delete_nc_submotivos, [id]);
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
    async read(){
        let con = await dbConnection();
        try {
            await con.query("START TRANSACTION");
            let result = await con.queries(queries.read_nc_submotivos);
            await con.query('commit');
            return result;
        }
        catch(ex){
            con.query('ROLLBACK');
            console.log(ex);
            throw ex;
        }
        finally{
            await con.destroy();
            await con.release();
        }
    }
}

module.exports = SubmotivoRepository;