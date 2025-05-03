require('dotenv').config(); // Cargar variables de entorno

const express = require('express');
const app = express();

// Puerto desde variable de entorno o por defecto 3000
const PORT = process.env.PORT || 3000;

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Hola desde Node.js en producción!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});

// Manejo básico de errores
app.use((err, req, res, next) => {
  console.error('Error interno:', err.stack);
  res.status(500).send('Error interno del servidor');
});
