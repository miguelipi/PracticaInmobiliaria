const express = require('express');
const router = express.Router();
const db = require('../config/dbConfig'); // Asegúrate de que la ruta sea correcta

// Ruta para registrar un nuevo usuario
router.post('/register', (req, res) => {
    const { nombre, email, movil, empresa } = req.body;

    // Inserta el nuevo usuario en la base de datos
    const query = 'INSERT INTO usuarios (nombre, email, movil, empresa) VALUES (?, ?, ?, ?)';
    db.query(query, [nombre, email, movil, empresa], (err, result) => {
        if (err) {
            console.error('Error al registrar el usuario: ', err);
            return res.status(500).send('Error al registrar el usuario');
        }

        // Redirige al index.html después del registro exitoso
        res.redirect('/index.html');
    });
});

module.exports = router;
