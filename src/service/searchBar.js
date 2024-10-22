import { handleGetProduct } from "../persistence/localStorage"; // Importamos la función para obtener productos de localStorage
import { handleRenderList } from "../views/store"; // Importamos la función para renderizar la lista de productos en la vista

// Función para buscar productos por nombre
export const handleSearchProductByName = () => {
    const inputHeader = document.getElementById("inputHeader"); // Obtenemos el input de búsqueda
    const products = handleGetProduct(); // Obtenemos la lista de productos desde localStorage

    // Filtramos los productos que incluyen el texto ingresado en el input
    const result = products.filter((el) =>
        el.nombre.toLowerCase().includes(inputHeader.value.toLowerCase()) // Comparamos en minúsculas para hacer la búsqueda insensible a mayúsculas
    );

    handleRenderList(result); // Renderizamos la lista filtrada en la vista
}
