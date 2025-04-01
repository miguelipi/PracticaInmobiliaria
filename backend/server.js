const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
    console.log("Petición a / (index.html)");
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/quienesSomos.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/templates/quienesSomos.html'));
});

app.get('/main.html', (req, res) => {
    console.log("Petición a /main.html");
    res.sendFile(path.join(__dirname, '../frontend/templates/main.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
