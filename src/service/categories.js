//categoria

import { categoriaActiva } from "../../main";
import { handleGetProduct } from "../persistence/localstorage";
import { handleRenderList } from "../views/store";

const handleFilterProductByCategory = (categoryIn) => {
    const products = handleGetProduct();

    switch (categoryIn) {
        case categoriaActiva:
          handleRenderList(products);
          break;
        case "Todo":
          handleRenderList(products);
          break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
          const result = products.filter((el) => el.categoria === categoryIn);
          handleRenderList(result);
        default:
          break;
        case "mayorPrecio":
          const resultPreciMayor = products.sort((a, b) => b.precio - a.precio);
          handleRenderList(resultPreciMayor);
    
          break;
        case "menorPrecio":
          const resultPrecioMenor = products.sort((a, b) => a.precio - b.precio);
          handleRenderList(resultPrecioMenor);
          break;
      }
}




//render de la vista categorias

export const renderCategories = ()=>{
    const ulList = document.
    getElementById("listFilter");
    ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor precio</li>
    <li id="menorPrecio">Menor precio</li>
    `;

    const liElement = ulList.querySelectorAll("li");
    liElement.forEach((li)=>{
        li.addEventListener("click", ()=>{
            handleClick(li);
        });        
    })

    const handleClick = (elemento)=>{
        handleFilterProductByCategory(elemento.id);
        liElement.forEach((el)=>{
            if(el.classList.contains("liActive")){
                el.classList.remove("liActive");
            } else{
                if(elemento == el){
                    el.classList.add("liActive");
                }
            }
        })
    }
}