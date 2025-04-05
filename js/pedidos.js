import { obtenerPedidos, crearPedido } from './Api.js';

// Carga y muestra los pedidos existentes
const cargarPedidos = async () => {
  const pedidos = await obtenerPedidos();
  const lista = document.getElementById('lista-pedidos');
  lista.innerHTML = '';

  pedidos.forEach(pedido => {
    const item = document.createElement('li');
    item.textContent = `Pedido ${pedido.id_pedido} - Cliente ${pedido.id_cliente} - Producto ${pedido.producto}`;
    lista.appendChild(item);
  });
};

// Registra un nuevo pedido con los datos del formulario
const registrarPedido = async () => {
  const id_cliente = document.getElementById('id_cliente').value;
  const producto = document.getElementById('producto').value;

  await crearPedido({ id_cliente, producto });
  cargarPedidos(); // Actualiza la lista
};

// Escucha el envío del formulario de pedido
document.getElementById('form-pedido').addEventListener('submit', (e) => {
  e.preventDefault();
  registrarPedido();
});

// Carga pedidos automáticamente al abrir la página
window.addEventListener('DOMContentLoaded', cargarPedidos);
