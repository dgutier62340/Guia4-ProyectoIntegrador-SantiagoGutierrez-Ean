# Guia4-ProyectoIntegrador-SantiagoGutierrez-Ean
Guía 4 - Proyecto Integrador, Sistema de gestión de pedidos y rastreo de envíos para TechLogistics S.A., utilizando SQL, Node.js (Express)  . Incluye modelado de base de datos, API REST y una interfaz web para administrar pedidos, clientes y transportistas.

# TechLogistics S.A.

Sistema de gestión de pedidos y rastreo de envíos para la empresa **TechLogistics S.A.**.  
Este proyecto incluye un backend con Node.js, una base de datos MySQL y una interfaz web hecha con HTML, CSS y JavaScript.

---

## 📦 Características

- Registro y visualización de clientes
- Registro y visualización de pedidos
- Conexión a base de datos MySQL
- API REST creada con Express
- Interfaz web interactiva para gestión de datos

---

## 🛠️ Tecnologías Utilizadas

- **Backend**: Node.js, Express
- **Base de Datos**: MySQL
- **Frontend**: HTML, CSS, JavaScript
- **Editor**: Visual Studio Code

---

## 🚀 Instrucciones para ejecutar

### 1. Clonar el repositorio
git clone https://github.com/tu_usuario/techlogistics.git cd techlogistics

npm install

### 3. Configurar la base de datos
Asegúrate de tener MySQL instalado y crear la base de datos ejecutando:

CREATE DATABASE TechLogistics;

### 4. Edita los datos de conexión a MySQL:

const db = mysql.createConnection({
  host: 'localhost',
  user: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'TechLogistics'
});
