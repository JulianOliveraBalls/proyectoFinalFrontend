/* product */

import Swal from "sweetalert2";
import { productoActivo } from "../../main";
import { handleGetProduct, setInLocalStorage } from "../persistence/localstorage";
import { closeModal } from "../views/modal";
import { handleGetProductToStore, handleRenderList } from "../views/store";

//guardar o modificar elementos
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", ()=> {
  handleSaveOrModifyElements();
})

const handleSaveOrModifyElements = ()=>{
  const nombre = document.getElementById("nombre").value, 
  img = document.getElementById("img").value,
  precio = document.getElementById("precio").value,
  categoria = document.getElementById("categoria").value;
  let object = null;
  if(productoActivo){
    object = {
      ...productoActivo,
      nombre,
      img,
      precio,
      categoria
    }

  }else{
    object = {
      id: new Date().toISOString(),
      nombre,
      img,
      precio,
      categoria
    }
  }

  Swal.fire({
    title: "Correcto!",
    text: "Producto guardado correctamente!",
    icon: "success",
  });

  
  setInLocalStorage(object);
  handleGetProductToStore();
  closeModal();

}

export const handleDeleteProduct = () => {
  Swal.fire({
    title: "¿Desea eliminar elemento?",
    text: "Si lo eliminas sera permanentemente",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar!",
  }).then((result) => {
    if (result.isConfirmed) {
      const products = handleGetProduct();
      const result = products.filter((el) => el.id !== productoActivo.id);
      //setear el nuevo array
      localStorage.setItem("products", JSON.stringify(result));
      const newProducts = handleGetProduct();
      handleRenderList(newProducts);
      closeModal(); 
    } else {
      closeModal();
    }
  });
};