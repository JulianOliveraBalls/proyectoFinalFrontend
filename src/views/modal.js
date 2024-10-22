// Importaciones necesarias
import { productoActivo, setProductoActivo } from "../../main"; // Importa el producto activo y su setter
import { handleDeleteProduct } from "../service/product"; // Importa la función para manejar la eliminación de productos

/* Popup (modal) */

// Obtener el botón de cancelar y agregar un evento para cerrar el modal
const buttonCancel = document.getElementById("cancelButton");
buttonCancel.addEventListener("click", () => {
  closeModal(); // Llama a la función closeModal cuando se hace clic en cancelar
});

// Función para abrir el modal
export const openModal = () => {
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "flex"; // Muestra el modal
    const buttonDelete = document.getElementById("deleteButton");

    // Si hay un producto activo, muestra el botón de eliminar
    if (productoActivo) {
      buttonDelete.style.display = "block";
    } else {
      buttonDelete.style.display = "none"; // Si no hay producto activo, oculta el botón
    }

    // Si hay un producto activo, llena el modal con sus datos
    if (productoActivo) {
      const nombre = document.getElementById("nombre"),
            imagen = document.getElementById("img"),
            precio = document.getElementById("precio"),
            categories = document.getElementById("categoria");
      
      // Asigna los valores del producto activo a los campos del modal
      imagen.value = productoActivo.img;
      categories.value = productoActivo.categoria;
      precio.value = productoActivo.precio;
      nombre.value = productoActivo.nombre;
    }
}
  
// Función para cerrar el modal
export const closeModal = () => {
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "none"; // Oculta el modal
    setProductoActivo(null); // Restablece el producto activo a null
    resetModal(); // Resetea los campos del modal
}

// Función para resetear los campos del modal
export const resetModal = () => {
    const nombre = document.getElementById("nombre"), 
          img = document.getElementById("img"),
          precio = document.getElementById("precio"),
          categoria = document.getElementById("categoria");

    // Limpia los valores de los campos del modal
    nombre.value = "";
    img.value = "";
    precio.value = "0"; // Resetea el precio a 0
    categoria.value = "Seleccione una categoria"; // Resetea la categoría a la opción predeterminada
}

// Manejo del botón de eliminar
const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", () => {
    handleButtonDelete(); // Llama a la función para manejar la eliminación del producto
});

// Función para manejar la eliminación del producto
const handleButtonDelete = () => {
    handleDeleteProduct(); // Llama a la función que maneja la eliminación del producto
};
