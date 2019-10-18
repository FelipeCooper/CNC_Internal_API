const queries = require('./DB/queries/NaoConformidadeQueries');
const dbConnection = require('./DB/config/Connection');


module.exports = {
    async save(NaoConformidade) {
        let con = await dbConnection();
        try {
            await con.query('START TRANSACTION');
            let savedCNC = await con.query(queries.insert_nc_cadastro, [
                NaoConformidade.values()
            ])
            await con.query('COMMIT');
            NaoConformidade.id = savedCNC.insertId;
            return true;
        }
        catch (ex) {
            await con.query('rollback');
            console.log(ex);
            throw ex;
        }
        finally{
            await con.destroy();
            await con.release();
        }
    },
    //----//
    async delete(id){
        let con = await dbConnection();
        try{
            await con.query("START TRANSACTION");
            await con.query(queries.delete_nc_cadastro,[id]);
            await con.query("COMMIT");
            return true;
        }
        catch(ex){
            await con.query("ROLLBACK");
            console.log(ex);
            throw ex;
        }
        finally{
            await con.destroy();
            await con.release();
        }
    },
    //---//
    async read(data_start,data_end){
        let con = await dbConnection();
        try{
            await con.query("START TRANSACTION");
            let NaoConformidades = await con.query(queries.read_nc_cadastro,[data_start,data_end]);
            await con.query("COMMIT");
            return NaoConformidades;
        }
        catch(ex){
            await con.query("ROLLBACK");
            console.log(ex);
            throw ex;
        }
        finally{
            await con.destroy();
            await con.release();
        }
    },
    //------//
    async readBySetor(setorId,data_start,data_end){
        let con = await dbConnection();
        try{
            await con.query("START TRANSACTION");
            let NaoConformidades = await con.query(queries.readBySetor_nc_cadastro,[setorId,data_start,data_end]);
            await con.query("COMMIT");
            return NaoConformidades;
        }
        catch(ex){
            await con.query("ROLLBACK");
            console.log(ex);
            throw ex;
        }
        finally{
            await con.destroy();
            await con.release();
        }
    }  
}