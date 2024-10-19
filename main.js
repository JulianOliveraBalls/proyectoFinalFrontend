import { renderCategories } from "./src/service/categories";
import { handleSearchProductByName } from "./src/service/searchBar";
import { openModal } from "./src/views/modal";
import { handleGetProductToStore } from "./src/views/store";
import './style.css';

/* Aplicacion */ 
export let categoriaActiva = null;

export const setCategoriaActiva = (categoriaIn)=>{
  categoriaActiva = categoriaIn;
}

export let productoActivo = null;

export const setProductoActivo = (productoIn)=>{
  productoActivo = productoIn;
}

handleGetProductToStore();
renderCategories();


//header

const buttonAdd = document.getElementById("buttonAddElement");

buttonAdd.addEventListener("click", ()=>{
  openModal();
})

//btn search

const buttonSearch = document.getElementById("buttonSearch");

buttonSearch.addEventListener('click', ()=>{
  handleSearchProductByName();
})

