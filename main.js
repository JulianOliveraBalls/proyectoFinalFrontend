import { renderCategories } from "./src/service/categories"; // Importa la función para renderizar las categorías
import { handleSearchProductByName } from "./src/service/searchBar"; // Importa la función para buscar productos por nombre
import { openModal } from "./src/views/modal"; // Importa la función para abrir el modal
import { handleGetProductToStore } from "./src/views/store"; // Importa la función para obtener y renderizar productos
import './style.css'; // Importa el archivo de estilos CSS

/* Aplicacion */ 
export let categoriaActiva = null; // Variable global para la categoría activa

// Función para establecer la categoría activa
export const setCategoriaActiva = (categoriaIn) => {
  categoriaActiva = categoriaIn; // Asigna la categoría activa
}

export let productoActivo = null; // Variable global para el producto activo

// Función para establecer el producto activo
export const setProductoActivo = (productoIn) => {
  productoActivo = productoIn; // Asigna el producto activo
}

// Inicializa la aplicación
handleGetProductToStore(); // Carga y renderiza los productos
renderCategories(); // Renderiza las categorías

// Interacción con el header

// Botón para agregar un nuevo producto
const buttonAdd = document.getElementById("buttonAddElement");

buttonAdd.addEventListener("click", () => {
  openModal(); // Abre el modal para agregar o editar un producto
});

// Botón de búsqueda
const buttonSearch = document.getElementById("buttonSearch");

buttonSearch.addEventListener('click', () => {
  handleSearchProductByName(); // Realiza la búsqueda de productos por nombre
});

