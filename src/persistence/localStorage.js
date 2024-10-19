//LocalStorage
export const handleGetProduct = ()=>{
    const products = JSON.parse(localStorage.getItem("products"));
    if(products){
        return products
    } else {
        return [];
    }
};

export const setInLocalStorage = (product)=>{
    let productInLocal = handleGetProduct();

    const existingIndex = productInLocal.findIndex((productsLocal)=>
        productsLocal.id == product.id)

    if(existingIndex !== -1 ){   
        productInLocal[existingIndex] = product
    } else{
        productInLocal.push(product);
    }
    localStorage.setItem("products", JSON.stringify(productInLocal));
}
