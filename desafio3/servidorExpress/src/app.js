import express from "express";
import ProductManager from "../../manager/ProductManager.js";

const manager = new ProductManager("../../files/Productos.json");

const PORT = 8080;

const app = express();

app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});

app.use(express.urlencoded({ extended: true }));

app.get('/products', async (req, res) => {
  const products =( await manager.getProducts());
  const limite = req.query.limite;
  if (!limite) {
    res.send({ products });
  } else {
    let resultadosFiltrados = products.slice(0, limite);
    res.send(resultadosFiltrados);
  }
});

app.get('/products/:id', async (req, res) => {
    const id = req.params.id; 
    const products = ( await manager.getProducts());
  
    
    const productoEncontrado = products.find(producto => producto.id === id);
  
    if (productoEncontrado) { 
      res.send(productoEncontrado);
    } else { 
      res.send(`No se encontró ningún producto con el id ${id}`);
    }
});
