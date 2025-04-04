const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./Config/database');

const app = express();

app.use(cors());
app.use(express.json()); 

// Importamos las rutas
const pedidosRoutes = require('./src/routes/pedidos.routes');
app.use('/api/pedidos', pedidosRoutes);

const clientesRoutes = require('./src/routes/clientes.routes');
app.use('/api/clientes', clientesRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
