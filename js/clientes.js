import { obtenerClientes, crearCliente } from './Api.js'; // Importamos Api para comunicarnos con la base de datos

// Carga y muestra la lista de clientes en la interfaz
const cargarClientes = async () => {
  const clientes = await obtenerClientes(); // Espera los datos
  const lista = document.getElementById('lista-clientes');
  lista.innerHTML = ''; // Limpia la lista actual

  // Por cada cliente, crea un <li> dentro del html con su info
  clientes.forEach(cliente => {
    const item = document.createElement('li');
    item.textContent = `${cliente.nombre} - ${cliente.email} - ${cliente.telefono}`;
    lista.appendChild(item);
  });
};

// Toma los datos del formulario y crea un cliente
const registrarCliente = async () => {
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;

  await crearCliente({ nombre, email, telefono }); // Envia los datos a la API
  cargarClientes(); // Refresca la lista
};

// Asocia el formulario con la función de registro
document.getElementById('form-cliente').addEventListener('submit', (e) => {
  e.preventDefault(); // Previene el comportamiento por defecto (recargar)
  registrarCliente(); // Ejecuta el registro
});

// Carga los clientes automáticamente al abrir la página
window.addEventListener('DOMContentLoaded', cargarClientes);
