const express = require('express');
const path = require('path');
const app = express();

// Importar las rutas
const foodRoutes = require('./routes/foodRoutes');

// Servir imágenes desde el directorio 'images' dentro de 'server'
app.use('/api/img', express.static(path.join(__dirname, 'public')));

// Middleware para las rutas
app.use('/api', foodRoutes);


// Puerto en el que escuchará el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
