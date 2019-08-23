const queries = require('./DB/queries/MotivoQueries');
const dbConnection = require('./DB/config/Connection');

const MotivoRepository = {
    async save(motivo) {
        let con = await dbConnection();
        try {
            await con.query('START TRANSACTION');
            let savedMotivo = await con.query(queries.insert_nc_motivos, [motivo.titulo]);
            await con.query('COMMIT');
            motivo.id = savedMotivo.insertId;
            return motivo;
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
            let motivos = await con.query(queries.readID_nc_motivos, [id]);
            await con.query('COMMIT');
            return motivos;
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
    async update(motivo) {
        let con = await dbConnection();
        try {
            await con.query('START TRANSACTION');
            let updatedmotivo = await con.query(queries.update_nc_motivos, [
                motivo.titulo,
                motivo.id
            ]);
            await con.query('COMMIT');
            return updatedmotivo;
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
            await con.query(queries.delete_nc_motivos, [id]);
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
            let result = await con.query(queries.read_nc_motivos);
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
    },
    async motivoHasSetor(idMotivo){
        let con = await dbConnection();
        try{
            await con.query('START TRANSACTION');
            let result = con.query(queries.motivo_has_setor,[idMotivo]);
            await con.query('COMMIT');
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

module.exports = MotivoRepository;