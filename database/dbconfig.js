const sql = require('mssql');
const config = {
    user: 'examen',
    password: 'examen',
    server: '172.17.6.102',
    database: 'prueba',
    options:{
        trustedConnection: true,
        enableArithAbort: true,
        instancename:'',
        encrypt: false,
        trustServerCertificate: true
    },
    port: 1433
}

async function getTable(){
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query('select * from dbo.Usuarioo')
        return result;
    } catch (error) {
        console.log(error.message);
    }
}

async function getColumns(){
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select COLUMN_NAME from INFORMATION_SCHEMA.COLUMNS where TABLE_SCHEMA = 'dbo' and TABLE_NAME = 'Usuarioo' order by ORDINAL_POSITION`)
        return result;
    } catch (error) {
        console.log(error.message);
    }
}

// Buscar por id
async function searchById(id){
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('idd', sql.Int, id)
            .query('select * from dbo.Usuarioo where id = @idd')
        return await result.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

async function logIn(clave, password){
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('clave', sql.VarChar(50), clave)
            .input('password', sql.VarChar(50), password)
            .query(`SELECT * FROM Usuarioo WHERE clave = @clave AND pasword = @password`)
        console.log(result.recordset);
    } catch (error) {
        console.log(error);
    }
}


async function addRecordSP(nombre,apellido,clave,password){
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('nombre', sql.VarChar(50), nombre)
            .input('apellido', sql.VarChar(50), apellido)
            .input('clave', sql.VarChar(50), clave)
            .input('password', sql.VarChar(50), password)
            .query(`INSERT INTO Usuarioo VALUES('${nombre}', '${apellido}', '${clave}', '${password}')`);
        console.log('Columnas afectadas: ',result.rowsAffected);
    } catch (error) {
        console.log(error.message);
    }
}

async function addRecord(nombre,apellido,clave,password){
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('nombre', sql.VarChar(50), nombre)
            .input('apellido', sql.VarChar(50), apellido)
            .input('clave', sql.VarChar(50), clave)
            .input('password', sql.VarChar(50), password)
            .query(`INSERT INTO dbo.Usuarioo values(@nombre, @apellido, @clave, @password)`)
        console.log('Columnas afectadas: ',result.rowsAffected);
    } catch (error) {
        console.log(error);
    }
}

async function deleteRecord(id){
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM dbo.Usuarioo WHERE id = ${id}`);
        console.log(result.rowsAffected);
    } catch (error) {
        console.log(error.message);
    }
}






module.exports = {
    config,
    getTable,
    searchById,
    addRecord,
    deleteRecord,
    addRecordSP,
    logIn,
    getColumns
};