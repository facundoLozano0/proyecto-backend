const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

// Middleware para manejar JSON
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/mi_base_datos')
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch(err => {
    console.log("Error al conectar a MongoDB:", err);
  });

// Rutas
app.use('/api/users', userRoutes);

// Ruta básica
app.get('/', (req, res) => {
    res.send('¡Servidor funcionando correctamente!');
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});