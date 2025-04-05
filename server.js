// Importar módulos necesarios
const express = require('express');
const cors = require('cors');
const path = require('path');
const mysql = require('mysql2');
const app = express();
const PORT = 3000;

// Configurar conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'R#$i131o0t',
  database: 'TechLogistics'
});

// Conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas de clientes
app.get('/api/clientes', (req, res) => {
  db.query('SELECT * FROM Clientes', (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener clientes' });
    res.json(results);
  });
});

app.post('/api/clientes', (req, res) => {
  const { nombre, email, telefono } = req.body;
  db.query('INSERT INTO Clientes (nombre, email, telefono) VALUES (?, ?, ?)', 
    [nombre, email, telefono], (err, result) => {
    if (err) return res.status(500).json({ error: 'Error al agregar cliente' });
    res.json({ id: result.insertId, nombre, email, telefono });
  });
});

// Rutas de pedidos
app.get('/api/pedidos', (req, res) => {
  db.query('SELECT * FROM Pedidos', (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener pedidos' });
    res.json(results);
  });
});

app.post('/api/pedidos', (req, res) => {
  const { id_cliente, producto } = req.body;
  db.query('INSERT INTO Pedidos (id_cliente, producto) VALUES (?, ?)', 
    [id_cliente, producto], (err, result) => {
    if (err) return res.status(500).json({ error: 'Error al agregar pedido' });
    res.json({ id: result.insertId, id_cliente, producto });
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
