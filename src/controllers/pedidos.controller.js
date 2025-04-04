const db = require('../../Config/database');

// Obtener todos los pedidos
const obtenerPedidos = (req, res) => {
    db.query('SELECT * FROM Pedidos', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
};

// Crear un nuevo pedido
const crearPedido = (req, res) => {
    const { id_cliente, id_producto, cantidad } = req.body;
    db.query('INSERT INTO Pedidos (id_cliente, id_producto, cantidad) VALUES (?, ?, ?)',
        [id_cliente, id_producto, cantidad],
        (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: 'Pedido creado con éxito', id_pedido: result.insertId });
            }
        });
};

module.exports = { obtenerPedidos, crearPedido };
