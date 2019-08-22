const queries = require('./queries/FranquiaQueries');
const dbConnection = require('./DB/config/Connection');

const FranquiaRepository = {
    async save(franquia) {
        let con = await dbConnection();
        try {
            await con.query('START TRANSACTION');
            let result = await con.query(queries.insert_franquias_cadastro, [franquia.values()]);
            await con.query("COMMIT");
            franquia.id = result.insertId;
            return franquia;
        }
        catch (ex) {
            await con.query(`ROLLBACK`);
            console.log(ex);
            throw ex;
        }
        finally {
            await con.destroy();
            await con.release();
        }
    },
    //-------//

    async read() {
        let con = await dbConnection();
        try {
            await con.query("START TRANSACTION");
            let result = await con.query(queries.read_franquias_cadastro);
            await con.query('COMMIT');
            return result;
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
    //-----//
    async readId(id) {
        let con = await dbConnection();
        try {
            await con.query('START TRANSACTION');
            let result = await con.query(queries.readID_franquias_cadastro, [id]);
            await con.query('COMMIT');
            return result;
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
    //-----------//
    async update(franquia) {
        let con = await dbConnection();
        try {
            await con.query('START TRANSACTION');
            let result = await con.queries(queries.update_franquias_cadastro, [
                franquia.values(),
                franquia.id
            ])
            await con.query('COMMIT');
            return result;
        }
        catch (ex) {
            await con.query('ROLLBACK');
            console.log(ex);
            throw ex;
        }
        finally{
            await con.destroy();
            await con.release();
        }
    },
    //-------//
    async delete(id){
        let con = await dbConnection();
        try{
            await con.query('START TRANSACTION');
            await con.query(queries.delete_franquias_cadastro,[id]);
            await con.query(`COMMIT`);
            return true;
        }
        catch (ex){
            await con.query('ROLLBACK');
            console.log(ex);
            throw ex;
        }
        finally{
            await con.destroy();
            await con.release();
        }
    }
}