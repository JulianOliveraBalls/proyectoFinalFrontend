// Función para obtener los productos almacenados en localStorage
export const handleGetProduct = () => {
    // Obtiene los productos desde localStorage y los convierte de JSON a objeto de JavaScript
    const products = JSON.parse(localStorage.getItem("products"));
    
    // Si hay productos almacenados, los retorna
    if (products) {
        return products;
    } else {
        // Si no hay productos almacenados, retorna un array vacío
        return [];
    }
};

// Función para agregar o actualizar un producto en localStorage
export const setInLocalStorage = (product) => {
    // Obtiene los productos existentes en localStorage
    let productInLocal = handleGetProduct();

    // Busca si el producto que se va a guardar ya existe en el array, comparando por ID
    const existingIndex = productInLocal.findIndex((productsLocal) => 
        productsLocal.id == product.id
    );

    // Si el producto ya existe, lo actualiza en la misma posición del array
    if (existingIndex !== -1) {   
        productInLocal[existingIndex] = product;
    } else {
        // Si no existe, lo agrega al array
        productInLocal.push(product);
    }

    // Actualiza el localStorage con el nuevo array de productos
    localStorage.setItem("products", JSON.stringify(productInLocal));
};
