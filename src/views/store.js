//store

import { setProductoActivo } from "../../main";
import { handleGetProduct } from "../persistence/localstorage"
import { openModal } from "./modal";


export const handleGetProductToStore = () => {
    const products =  handleGetProduct();
    handleRenderList(products);
}

export const handleRenderList = (products) =>{
 
    const burgers = products.filter((el)=>
        el.categoria == "Hamburguesas"
    );
    const papas = products.filter((el)=>
        el.categoria == "Papas"
    );
    const gaseosas = products.filter((el)=>
        el.categoria == "Gaseosas"
    );
    
  



    const renderProductGroup = (productos, title) => {
        if(productos.length>0){
            const productosHtml = productos.map((producto, index) =>{
                return`
                <div class='containerTargetItem' 
                id=product-${producto.categoria}-${index}>
                <div>
                <img src='${producto.img}'/>
                <h2> ${producto.nombre} </h2>
                <p><b>Precio:</b> $ ${producto.precio}</p>
                </div>
                </div>`;
            });

            return `
            <section class='sectionStore'>
            <h3>${title}</h3>
            <div class='containerProductStore'>
            ${productosHtml.join("")}
            </div>
            </section>
            `;
        } else {
            return ""
        }
    };

    const appContainer = document.getElementById("storeContainer");

    appContainer.innerHTML = `
    ${renderProductGroup(burgers, "Hamburguesas")}
    ${renderProductGroup(papas, "Papas")}
    ${renderProductGroup(gaseosas, "Gaseosas")}
    `;

    const addEvents = (productsIn) => {
        if (productsIn) {
          productsIn.forEach((element, index) => {
            
            const productContainer = document.getElementById(
              `product-${element.categoria}-${index}`
            );
            productContainer.addEventListener('click', () => {
              setProductoActivo(element);
              openModal();
            });
          });
        }
      };
      addEvents(burgers);
      addEvents(papas);
      addEvents(gaseosas);
};