module.exports = {
    user: 'ADMIN',
    password: '!PsTVqiybf_THL5',
    connectionString: ''
  };
  
  async function testConnection() {
    let connection;
    try {
        connection = await oracledb.getConnection(dbConfig);
        console.log('Conexión a la base de datos establecida exitosamente');
    } catch (err) {
        console.error('Error de conexión:', err);
        console.error('Stack Trace:', err.stack);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error cerrando la conexión:', err);
            }
        }
    }
}

testConnection();