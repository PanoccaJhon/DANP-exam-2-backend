
const express = require('express');
const router = express.Router();
const pool = require('../db/db');

// Ruta para obtener artistas con paginación
router.get('/food', async (req, res) => {
  try {
    // Obtener `limit` y `offset` de los parámetros de consulta, con valores predeterminados
    const limit = parseInt(req.query.limit) || 5;  // Predeterminado a 10 elementos
    const offset = parseInt(req.query.offset) || 0; // Predeterminado a 0 (primer elemento)

    // Consulta a la base de datos con paginación
    const result = await pool.query('SELECT * FROM alimentos LIMIT $1 OFFSET $2', [limit, offset]); // por modificar

    // Enviar respuesta JSON con los datos y detalles de paginación
    res.json({
      success: true,
      data: result.rows,
      count: result.rows.length,
      offset:offset,
      limit:limit
    });
  } catch (error) {
    console.error('Error al obtener los alimentos:', error);
    res.status(500).json({ error: 'Error al obtener los alimentos' });
  }
});


// Exportar las rutas
module.exports = router;