import fs from "fs";

const path = "./files/Productos.json";

export default class ProductManager {
  // constructor(file){
  //     this.file=file
  // }

  getProducts = async () => {
    if (fs.existsSync(path)) {
      const data = await fs.promises.readFile(path, "utf-8");
      const products = JSON.parse(data);
      return products;
    } else {
      return [];
    }
  };

  AddProducts = async (product) => {
    const products = await this.getProducts();
    if (products.length === 0) {
      product.id = 1;
    } else {
      product.id = products[products.length - 1].id + 1;
    }

    products.push(product);

    await fs.promises.writeFile(path, JSON.stringify(products, null, "\t"));

    return product;
  };

  deleteProducById = async (id) => {
    const data =  await fs.promises.readFile(path, "utf-8");
    const products = JSON.parse(data)
    const product = products.find(product => product.id === id)

    if(product){
      products.splice(product,1)
      return products
    }else{
      console.log("producto no encontrado")
    }

  };

  getProducById = async (id) => {
    const data =  await fs.promises.readFile(path, "utf-8");
    const products = JSON.parse(data)
    const obj = products.find(obj => obj.id ===id)

    if(obj){
      return obj
    }
  };

  DeleteProducts = async () => {
    this.writeFile([]);
  };
}
