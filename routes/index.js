const express = require('express');
const router = express.Router();
const authController = require('./controllers/authController'); // Ejemplo de autenticación
const settingsController = require('./controllers/settingsController'); // Ejemplo de configuración

// Ruta para autenticación
router.post('/auth/login', authController.login);
router.post('/auth/register', authController.register);

// Ruta para configuraciones globales
router.get('/settings', settingsController.getSettings);
router.put('/settings', settingsController.updateSettings);

module.exports = router;
