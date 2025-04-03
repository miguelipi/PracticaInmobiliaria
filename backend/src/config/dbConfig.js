const oracledb = require('oracledb');

const dbConfig = {
  user: 'ADMIN',
  password: '!PsTVqiybf_THL5',
  connectString: 'eurozona_high',
  externalAuth: false
};

async function testConnection() {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    console.log('Conexión a la base de datos establecida exitosamente');
    const result = await connection.execute('SELECT SYSDATE FROM dual');
    console.log('Hora del sistema:', result.rows[0][0]);
  } catch (err) {
    console.error('Error de conexión:', err);
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
