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

  getProducById = async (id) => {
    let product = await this.getProducts.find(
      (product) => product.id === id);

    if (product) {
      return product;
    } else {
      return console.log("Not Found");
    }
  };

  DeleteProducts = async () => {
    this.writeFile([]);
  };
}