const queries = require('./DB/queries/SetorQueries');
const dbConnection = require('./DB/config/Connection');

const SetoresRepository = {
    async save(setor) {
        let con = await dbConnection();
        try {
            await con.query('START TRANSACTION');
            let savedSetor = await con.query(queries.insert_nc_setores, [setor.titulo]);
            await con.query('COMMIT');
            setor.id = savedSetor.insertId;
            return setor;
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
            let setores = await con.query(queries.readID_nc_setores, [id]);
            await con.query('COMMIT');
            return setores;
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
    async update(setor) {
        let con = await dbConnection();
        try {
            await con.query('START TRANSACTION');
            let updatedSetor = await con.query(queries.update_nc_setores, [
                setor.titulo,
                setor.id
            ]);
            await con.query('COMMIT');
            return updatedSetor;
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
            await con.query(queries.delete_nc_setores, [id]);
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
            let result = await con.queries(queries.read_nc_setores);
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

module.exports = SetoresRepository;