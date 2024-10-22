//=====================store===================

// Importa funciones desde otros módulos
import { setProductoActivo } from "../../main"; // Importa la función para establecer el producto activo
import { handleGetProduct } from "../persistence/localStorage"; // Importa la función para obtener productos del localStorage
import { openModal } from "./modal"; // Importa la función para abrir el modal

// Función que obtiene los productos del almacenamiento y los renderiza en la lista
export const handleGetProductToStore = () => {
    const products = handleGetProduct(); // Obtiene los productos del almacenamiento local
    handleRenderList(products); // Renderiza la lista de productos
}

// Función que renderiza la lista de productos filtrados por categoría
export const handleRenderList = (products) => {

    // Filtra los productos por categoría
    const burgers = products.filter((el) =>
        el.categoria === "Hamburguesas"
    );
    const papas = products.filter((el) =>
        el.categoria === "Papas"
    );
    const gaseosas = products.filter((el) =>
        el.categoria === "Gaseosas"
    );

    // Función para generar el HTML de un grupo de productos
    const renderProductGroup = (productos, title) => {
        if (productos.length > 0) { // Verifica si hay productos en la categoría
            const productosHtml = productos.map((producto, index) => {
                // Genera el HTML para cada producto
                return `
                <div class='containerTargetItem' 
                id='product-${producto.categoria}-${index}'>
                <div>
                <img src='${producto.img}' alt='${producto.nombre}' />
                <h2>${producto.nombre}</h2>
                <p><b>Precio:</b> $${producto.precio}</p>
                </div>
                </div>`;
            });

            // Devuelve el HTML para el grupo de productos
            return `
            <section class='sectionStore'>
            <h3>${title}</h3>
            <div class='containerProductStore'>
            ${productosHtml.join("")}
            </div>
            </section>
            `;
        } else {
            return ""; // Si no hay productos, devuelve una cadena vacía
        }
    };

    const appContainer = document.getElementById("storeContainer");

    // Renderiza las secciones de productos en el contenedor principal
    appContainer.innerHTML = `
    ${renderProductGroup(burgers, "Hamburguesas")}
    ${renderProductGroup(papas, "Papas")}
    ${renderProductGroup(gaseosas, "Gaseosas")}
    `;

    // Función para agregar eventos de clic a los productos
    const addEvents = (productsIn) => {
        if (productsIn) {
          productsIn.forEach((element, index) => {
            // Obtiene el contenedor del producto
            const productContainer = document.getElementById(
              `product-${element.categoria}-${index}`
            );
            // Agrega un evento de clic que activa el producto y abre un modal
            productContainer.addEventListener('click', () => {
              setProductoActivo(element); // Establece el producto activo
              openModal(); // Abre el modal
            });
          });
        }
    };

    // Agrega los eventos de clic a los productos filtrados
    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);
};
