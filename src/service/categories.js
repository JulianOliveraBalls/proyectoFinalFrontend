// Importamos las funciones necesarias y la variable de categoría activa desde otros archivos
import { categoriaActiva } from "../../main";
import { handleGetProduct } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";

// Función para filtrar productos por categoría
const handleFilterProductByCategory = (categoryIn) => {
    // Obtenemos los productos almacenados en localStorage
    const products = handleGetProduct();

    // Usamos un switch para filtrar los productos según la categoría seleccionada
    switch (categoryIn) {
        // Si la categoría seleccionada es la categoría activa actual
        case categoriaActiva:
            handleRenderList(products); // Renderiza la lista completa de productos
            break;

        // Si la categoría es "Todo", también renderiza la lista completa de productos
        case "Todo":
            handleRenderList(products);
            break;

        // Si es una categoría específica, como "Hamburguesas", "Papas" o "Gaseosas"
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            // Filtramos los productos que pertenecen a esa categoría
            const result = products.filter((el) => el.categoria === categoryIn);
            handleRenderList(result); // Renderiza los productos filtrados
            break;

        // Si es para ordenar por precio de mayor a menor
        case "mayorPrecio":
            // Ordenamos los productos por precio descendente
            const resultPreciMayor = products.sort((a, b) => b.precio - a.precio);
            handleRenderList(resultPreciMayor); // Renderiza los productos ordenados
            break;

        // Si es para ordenar por precio de menor a mayor
        case "menorPrecio":
            // Ordenamos los productos por precio ascendente
            const resultPrecioMenor = products.sort((a, b) => a.precio - b.precio);
            handleRenderList(resultPrecioMenor); // Renderiza los productos ordenados
            break;

        default:
            break;
    }
};

// Función para renderizar las categorías en la interfaz
export const renderCategories = () => {
    // Obtenemos el elemento donde se renderizarán las categorías
    const ulList = document.getElementById("listFilter");

    // Asignamos las categorías como elementos de la lista
    ulList.innerHTML = `
        <li id="Todo">Todos los productos</li>
        <li id="Hamburguesas">Hamburguesas</li>
        <li id="Papas">Papas</li>
        <li id="Gaseosas">Gaseosas</li>
        <li id="mayorPrecio">Mayor precio</li>
        <li id="menorPrecio">Menor precio</li>
    `;

    // Obtenemos todos los elementos li (categorías)
    const liElement = ulList.querySelectorAll("li");

    // Añadimos un evento click a cada categoría
    liElement.forEach((li) => {
        li.addEventListener("click", () => {
            handleClick(li); // Llamamos a la función handleClick cuando se hace clic en una categoría
        });
    });

    // Función que maneja el evento click y cambia el estado de la categoría activa
    const handleClick = (elemento) => {
        handleFilterProductByCategory(elemento.id); // Filtra los productos según la categoría seleccionada
        liElement.forEach((el) => {
            if (el.classList.contains("liActive")) {
                el.classList.remove("liActive"); // Quitamos la clase activa de cualquier categoría seleccionada previamente
            } else {
                if (elemento == el) {
                    el.classList.add("liActive"); // Agregamos la clase activa a la categoría seleccionada
                }
            }
        });
    };
};
