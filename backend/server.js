const express = require('express');
const path = require('path');
const cors = require('cors');
const mysql = require('mysql2');
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

app.get('/config/testConnection', (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '',
  });

  connection.query('SELECT NOW() AS `current_time`', (err, results) => {
    if (err) {
      console.error('Error de conexión a la base de datos:', err);
      res.json({
        success: false,
        message: err.stack,
      });
      return;
    }

    res.json({
      success: true,
      message: `Conectado a la base de datos MySQL. Hora actual: ${results[0].current_time}`,
    });

    connection.end();
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
