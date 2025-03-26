const mysql = require('mysql');

// Configuración de la base de datos
const db = mysql.createConnection({
    host: 'sql8.freesqldatabase.com	',
    user: 'sql8769686',    // Usuario por defecto de MySQL (si no cambiaste la configuración)
    password: 'LzK4Stemxn',    // Contraseña (deja vacía si no tienes contraseña para el usuario root)
    database: 'sql8769686'
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error de conexión: ' + err.stack);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

module.exports = db;
