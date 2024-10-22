# Proyecto de Registro y Menú de Comidas

Este proyecto consiste en una aplicación web para la gestión de un menú de comidas y el registro de productos. Incluye una interfaz para agregar productos, ver un listado de opciones de menú y gestionar pedidos. El proyecto implementa HTML, CSS y JavaScript, asegurando una experiencia de usuario dinámica y responsiva.

## Requisitos

### 1. Estructura HTML

- **Formulario de Registro de Productos**:
  - Campos para ingresar la información del producto:
    - Nombre
    - Imagen (URL)
    - Precio
    - Selector de categoría

- **Menú de Comidas**:
  - Listado de opciones del menú, con sus respectivos precios (puede ser estático o dinámico).

### 2. Estilo CSS

- **Diseño Responsive**:
  - Uso de `media queries` para adaptar la interfaz a diferentes tamaños de pantalla.
  - El formulario de productos y la grilla deben reorganizarse correctamente en dispositivos móviles.

- **Flexbox y Grid**:
  - Flexbox se usa para alinear los campos del formulario y las opciones del menú.
  - Grid se utiliza para estructurar la grilla de pedidos, asegurando una disposición clara y organizada.

- **Estilización**:
  - Aplicación de estilos atractivos a los botones y campos del formulario.
  - Resaltado de los distintos tipos de comida y totales de pedidos para facilitar la visualización.

### 3. Funcionalidad JavaScript

- **Manejo de Productos**:
  - Los productos se almacenan en un array de objetos.
  - Funciones para agregar, calcular el total, y eliminar productos del array.
  - **Almacenamiento Persistente**:
    - Uso de `localStorage` para guardar los productos, asegurando que los datos persistan entre sesiones.
  - Al recargar la página, los productos se cargan desde `localStorage`.

- **Interacción con el DOM**:
  - Generación dinámica de la grilla de productos y los totales en función de los datos almacenados.
  - Permite a los usuarios eliminar productos, actualizando tanto el DOM como `localStorage`.


## Instalación y Uso

1. Clona este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
