// Obtiene la lista de clientes desde la API
export const obtenerClientes = async () => {
    const res = await fetch('/api/clientes');
    return res.json(); // Convierte la respuesta a JSON
  };
  
  // Envía un nuevo cliente a la API para guardarlo en la base de datos
  export const crearCliente = async (cliente) => {
    const res = await fetch('/api/clientes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cliente)
    });
    return res.json();
  };
  
  // Obtiene la lista de pedidos desde la API
  export const obtenerPedidos = async () => {
    const res = await fetch('/api/pedidos');
    return res.json();
  };
  
  // Envía un nuevo pedido a la API para guardarlo en la base de datos
  export const crearPedido = async (pedido) => {
    const res = await fetch('/api/pedidos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pedido)
    });
    return res.json();
  };
  