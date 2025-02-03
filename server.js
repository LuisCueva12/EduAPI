const express = require('express');
const dotenv = require('dotenv');
const generalRoutes = require('./routes/index');
const softechRoutes = require('./routes/softech_router');
const barrioRoutes = require('./routes/barrio_router');

dotenv.config();

const app = express();
app.use(express.json());

// Rutas generales
app.use('/api', generalRoutes);

// Rutas para la plataforma Softech
app.use('/api/softech', softechRoutes);

// Rutas para los simulacros de BarrioCode
app.use('/api/barrio', barrioRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
