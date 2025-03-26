const mysql = require('mysql');

// Configuración de la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',    // Usuario por defecto de MySQL (si no cambiaste la configuración)
    password: '',    // Contraseña (deja vacía si no tienes contraseña para el usuario root)
    database: 'inmobiliaria'
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
