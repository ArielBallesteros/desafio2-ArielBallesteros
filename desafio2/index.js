import ProductManager from "./manager/ProductManager.js";

const manager = new ProductManager ('./files/Productos.json');

const env = async () => {
    let prod ={
        title:"Maquina de tattoo 4",
        description:"descripcion",
        price:2000,
        thumbnail:"imagen 4",
        code:"6666666666",
        stock:10,
    }

 

    // let result = await manager.addProducts(prod);
    // console.log(result)

    let products = await manager.getProducts()
    console.log(products)

    // let productID = await manager.getProducById(4);
    // console.log(productID)

    // let borrarProdPorID = await manager.deleteProductById(4);
    // console.log(borrarProdPorID)

    // let borrarTodo = await manager.deleteAllProducts();
    // console.log(borrarTodo)

    

    let updateProduct = await manager.updateProduct("tinta tattoo","tinta negra",500,"foto","0000025",23,4);
    console.log(updateProduct)
}

env()