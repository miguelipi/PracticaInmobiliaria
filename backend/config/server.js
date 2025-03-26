const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const userRoutes = require('../routes/userRoutes');  // Asegúrate de que esta ruta sea correcta

const app = express();
const port = 3000;

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware para servir archivos estáticos (como imágenes, CSS, JS, etc.)
// Aquí se sirve el contenido de la carpeta "assets" ubicada en "frontend"
app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'assets')));

// Registrar las rutas para el registro de usuario u otras funcionalidades
// Todas las rutas definidas en userRoutes estarán bajo el prefijo '/api'
app.use('/api', userRoutes);

// Ruta principal para servir el formulario de registro (index.html)
// Se utiliza sendFile para enviar el archivo ubicado en "frontend/templates"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'templates', 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
