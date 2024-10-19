//funciones abrir y cerrar modal

import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct } from "../service/product";

/* popup */

const buttonCancel = document.getElementById("cancelButton");

buttonCancel.addEventListener("click", ()=>{
  closeModal();
})

export const openModal = ()=> {
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "flex"; 
    const buttonDelete = document.getElementById("deleteButton");
    if (productoActivo) {
      buttonDelete.style.display = "block";
    } else {
      buttonDelete.style.display = "none";
    }
    if (productoActivo) {
      const nombre = document.getElementById("nombre"),
        imagen = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categories = document.getElementById("categoria");
      imagen.value = productoActivo.img;
      categories.value = productoActivo.categoria;
      precio.value = productoActivo.precio;
      nombre.value = productoActivo.nombre;
    }
  }
  
  export const closeModal = ()=> {
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "none"; 
    setProductoActivo(null);
    resetModal();
  }
  
  export const resetModal = () => {
    const nombre = document.getElementById("nombre"), 
    img = document.getElementById("img"),
    precio = document.getElementById("precio"),
    categoria = document.getElementById("categoria");
  
    nombre.value = "";
    img.value = "";
    precio.value = "0"
    categoria.value = "Seleccione una categoria";
  }

  const deleteButton = document.getElementById("deleteButton");
  deleteButton.addEventListener("click", () => {
    handleButtonDelete();
  });
  const handleButtonDelete = () => {
    handleDeleteProduct();
  };