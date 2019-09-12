const queries = require('./DB/queries/SetorMembroQueries');
const dbConnection = require('./DB/config/Connection');

const SetorMembroRepository = {
    async save(SetorMembro) {
        let con = await dbConnection();
        try {
            await con.query('START TRANSACTION');
            let savedSetorMembro = await con.query(queries.insert_setor_membros, [
                SetorMembro.values()
            ]);
            await con.query('COMMIT');
            SetorMembro.id = savedSetorMembro.insertId;
            return SetorMembro;
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
            let SetorMembros = await con.query(queries.readsetor_id_membros, [id]);
            await con.query('COMMIT');
            return SetorMembros;
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
    async update(SetorMembro) {
        let con = await dbConnection();
        try {
            await con.query('START TRANSACTION');
            let updatedSetorMembro = await con.query(queries.update_setor_membros, [
                SetorMembro.nome,
                SetorMembro.email,
                SetorMembro.setor,
                SetorMembro.id
            ]);
            await con.query('COMMIT');
            return updatedSetorMembro;
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
            await con.query(queries.delete_setor_membros, [id]);
            await con.query('COMMIT')
            return {result:true};
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
            let result = await con.queries(queries.read_setor_membros);
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
            let result = await con.query(queries.readByEmail_setor_membros, [email]);
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
    },
    //------//
    async readBySetor(setor_id) {
        let con = await dbConnection();
        try {
            await con.query('START TRANSACTION');
            let result = await con.query(queries.readBySetor_setor_membros, [setor_id]);
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

module.exports = SetorMembroRepository;