/* product */

import Swal from "sweetalert2"; // Importamos SweetAlert para mostrar alertas
import { productoActivo } from "../../main"; // Importamos el producto activo actual
import { handleGetProduct, setInLocalStorage } from "../persistence/localStorage"; // Importamos funciones para manejar productos en localStorage
import { closeModal } from "../views/modal"; // Importamos la función para cerrar el modal
import { handleGetProductToStore, handleRenderList } from "../views/store"; // Importamos funciones para manejar la lista de productos

// Guardar o modificar elementos
const acceptButton = document.getElementById("acceptButton"); // Obtenemos el botón de aceptación
acceptButton.addEventListener("click", () => {
  handleSaveOrModifyElements(); // Añadimos un evento click que llama a la función para guardar o modificar elementos
});

// Función para guardar o modificar productos
const handleSaveOrModifyElements = () => {
  // Obtenemos los valores de los campos del formulario
  const nombre = document.getElementById("nombre").value, 
        img = document.getElementById("img").value,
        precio = document.getElementById("precio").value,
        categoria = document.getElementById("categoria").value;

  let object = null; // Inicializamos el objeto que contendrá el producto
  // Si hay un producto activo, modificamos sus propiedades
  if (productoActivo) {
    object = {
      ...productoActivo, // Copiamos las propiedades del producto activo
      nombre,
      img,
      precio,
      categoria
    };
  } else {
    // Si no hay un producto activo, creamos un nuevo objeto
    object = {
      id: new Date().toISOString(), // Generamos un ID único basado en la fecha actual
      nombre,
      img,
      precio,
      categoria
    };
  }

  // Mostramos una alerta de éxito
  Swal.fire({
    title: "Correcto!",
    text: "Producto guardado correctamente!",
    icon: "success",
  });

  // Guardamos el producto en localStorage y actualizamos la lista en la vista
  setInLocalStorage(object);
  handleGetProductToStore();
  closeModal(); // Cerramos el modal
};

// Función para eliminar un producto
export const handleDeleteProduct = () => {
  // Mostramos una alerta de confirmación
  Swal.fire({
    title: "¿Desea eliminar elemento?",
    text: "Si lo eliminas será permanentemente",
    icon: "warning",
    showCancelButton: true, // Mostramos botón de cancelar
    confirmButtonColor: "#3085d6", // Color del botón de confirmación
    cancelButtonColor: "#d33", // Color del botón de cancelación
    confirmButtonText: "Sí, eliminar!", // Texto del botón de confirmación
  }).then((result) => {
    // Si el usuario confirma la eliminación
    if (result.isConfirmed) {
      const products = handleGetProduct(); // Obtenemos los productos actuales
      const result = products.filter((el) => el.id !== productoActivo.id); // Filtramos el producto activo para eliminarlo
      // Actualizamos el array en localStorage
      localStorage.setItem("products", JSON.stringify(result));
      const newProducts = handleGetProduct(); // Obtenemos la nueva lista de productos
      handleRenderList(newProducts); // Renderizamos la lista actualizada
      closeModal(); // Cerramos el modal
    } else {
      closeModal(); // Si el usuario cancela, simplemente cerramos el modal
    }
  });
};
