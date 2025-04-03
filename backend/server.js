const express = require('express');
const path = require('path');
const cors = require('cors');
const oracledb = require('oracledb');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../frontend')));
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get("/:page", (req, res) => {
  res.sendFile(path.join(__dirname, `../frontend/pages/${req.params.page}`));
});

app.get('/config/testConnection', async (req, res) => {
  try {
    const connection = await oracledb.getConnection({
      user: 'ADMIN',
      password: '!PsTVqiybf_THL5',
      connectString: 'eurozona_high',
      externalAuth: false
    });

    const result = await connection.execute('SELECT SYSDATE FROM dual');
    await connection.close();

    res.json({
      success: true,
      message: `Conectado a la base de datos Oracle. Hora del sistema: ${result.rows[0][0]}`
    });
  } catch (err) {
    console.error('Error de conexión a la base de datos:', err);
    res.json({
      success: false,
      message: err.stack,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
