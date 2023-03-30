import ProductManager from "./manager/ProductManager.js";

const manager = new ProductManager ();

const env = async () => {
    let prod ={
        title:"Maquina de tattoo 4",
        description:"descripcion",
        price:2000,
        thumbnail:"imagen 4",
        code:"code",
        stock:10,
    }

 

    let result = await manager.AddProducts(prod);
    console.log(result)

    let products = await manager.getProducts()
    console.log(products)

    let productID = await manager.getProducById(5);
    console.log(productID)

    let borrarProdPorID = await manager.deleteProducById(9);
    console.log(borrarProdPorID)
}

env()