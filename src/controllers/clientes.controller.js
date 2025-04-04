const db = require('../../Config/database');

// Obtener todos los clientes
const obtenerClientes = (req, res) => {
    db.query('SELECT * FROM Clientes', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
};

// Obtener un cliente por ID
const obtenerClientePorId = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM Clientes WHERE id_cliente = ?', [id], (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'Cliente no encontrado' });
        } else {
            res.json(results[0]);
        }
    });
};

// Crear un nuevo cliente
const crearCliente = (req, res) => {
    const { nombre, email, telefono } = req.body;
    db.query('INSERT INTO Clientes (nombre, email, telefono) VALUES (?, ?, ?)',
        [nombre, email, telefono],
        (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: 'Cliente creado con éxito', id_cliente: result.insertId });
            }
        });
};

// Actualizar un cliente
const actualizarCliente = (req, res) => {
    const { id } = req.params;
    const { nombre, email, telefono } = req.body;
    db.query('UPDATE Clientes SET nombre = ?, email = ?, telefono = ? WHERE id_cliente = ?',
        [nombre, email, telefono, id],
        (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: 'Cliente actualizado con éxito' });
            }
        });
};

// Eliminar un cliente
const eliminarCliente = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Clientes WHERE id_cliente = ?', [id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Cliente eliminado con éxito' });
        }
    });
};

module.exports = {
    obtenerClientes,
    obtenerClientePorId,
    crearCliente,
    actualizarCliente,
    eliminarCliente
};
