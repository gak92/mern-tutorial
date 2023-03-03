const fs = require("fs");

const products = JSON.parse(fs.readFileSync("data.json", "utf-8")).products;

exports.createProduct = (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(201).json(req.body);
};

exports.getAllProducts = (req, res) => {
  res.json(products);
};

exports.getProduct = (req, res) => {
  console.log("PARAMS: ", req.params);
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
};

exports.replaceProduct = (req, res) => {
  console.log("PARAMS: ", req.params);

  const id = +req.params.id;
  console.log("ID: ", id);
  const productIndex = products.findIndex((p) => p.id === id);
  console.log("Product Index: ", productIndex);

  products.splice(productIndex, 1, {...req.body, id:id});

  res.json({"success": "true"});
};

exports.updateProduct = (req, res) => {
  console.log("PARAMS: ", req.params);

  const id = +req.params.id;
  console.log("ID: ", id);
  const productIndex = products.findIndex((p) => p.id === id);
  console.log("Product Index: ", productIndex);
  const product = products[productIndex];

  products.splice(productIndex, 1, {...product, ...req.body});

  res.json({"success": "true"});
};

exports.deleteProduct = (req, res) => {
  console.log("PARAMS: ", req.params);

  const id = +req.params.id;
  console.log("ID: ", id);
  const productIndex = products.findIndex((p) => p.id === id);
  console.log("Product Index: ", productIndex);
  const product = products[productIndex];

  products.splice(productIndex, 1);

  res.json(product);
};
