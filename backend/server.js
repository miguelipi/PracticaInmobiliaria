const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/quienesSomos.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/quienesSomos.html'));
});

app.get('/main.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/main.html'));
});

app.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/register.html'));
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/login.html'));
});

app.get('/demandas.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/demandas.html'));
});

app.get('/register.html', (req, res) => {
    console.log("Petición a /register.html");
    res.sendFile(path.join(__dirname, '../frontend/templates/register.html'));
});

app.get('/login.html', (req, res) => {
    console.log("Petición a /login.html");
    res.sendFile(path.join(__dirname, '../frontend/templates/login.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
