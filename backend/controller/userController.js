const db = require('../config/dbConfig');

// Función para registrar un usuario
const registerUser = (nombre, email, movil, empresa, callback) => {
    const query = 'INSERT INTO usuarios (nombre, email, movil, empresa) VALUES (?, ?, ?, ?)';
    db.query(query, [nombre, email, movil, empresa], (err, result) => {
        if (err) return callback(err, null);
        callback(null, result);
    });
};

module.exports = {
    registerUser
};
