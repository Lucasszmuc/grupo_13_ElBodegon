const fs = require("fs");
const path = require("path");

const productModel = {
  fileRoute: path.join(__dirname, "../data/products.json"),
  findAll: () => {
    // Buscamos el contenido del archivo JSON
    const jsonData = fs.readFileSync(productModel.fileRoute, "utf-8");
    // Convertimos el JSON en Javascript
    const products = JSON.parse(jsonData);

    return products;
  },

  findById: (id) => {
    const products = productModel.findAll();

    const selectedProduct = products.find(
      (productoActual) => productoActual.id == id
    );

    return selectedProduct;
  },

  createProduct: (bodyData) => {
    let products = productModel.findAll();

    const lastProdId = products[products.length - 1].id;

    const newProduct = {
      id: lastProdId + 1,
      ...bodyData,
    };

    products.push(newProduct);

    // Convertimos el Javascript en JSON
    let jsonData = JSON.stringify(products);

    fs.writeFileSync(productModel.fileRoute, jsonData, "utf-8");

    return newProduct;
  },

  deleteProduct: (id) => {
    let products = productModel.findAll();

    products = products.filter((productoActual) => productoActual.id !== id);

    const jsonProducts = JSON.stringify(products);

    fs.writeFileSync(productModel.fileRoute, jsonProducts, "utf-8");
  },

  updateProduct: (updatedProduct) => {
    // Buscar array de productos ya existentes
    let products = productModel.findAll();
    // Conseguir en qué indice de ese array, está guardado el producto del id en cuestión
    const prodIndex = products.findIndex(
      (productoActual) => productoActual.id === updatedProduct.id
    );
    // Modificar el elemento del array en ese índice, por el que nos pasaron por parámetro
    products[prodIndex] = updatedProduct;
    // Convertir este nuevo array en JSON
    const productsJson = JSON.stringify(products);
    // Guardar todo al JSON
    fs.writeFileSync(productModel.fileRoute, productsJson, "utf-8");
  },
};

module.exports = productModel;
