const fs = require("fs");
const model = require("../model/product");
const Product = model.Product;

// const products = JSON.parse(fs.readFileSync("data.json", "utf-8")).products;

exports.createProduct = async (req, res) => {
  // console.log(req.body);

  const product = new Product(req.body);

  // product.save((err, doc) => {
  //   console.log(err, doc);
  // });
  try {
    const result = await product.save();
    console.log(result);
    res.status(201).json(result);
  }
  catch(err) {
    console.log(err);
    res.status(400).json(err);
  }

};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.getProduct = async (req, res) => {
  console.log("PARAMS: ", req.params);
  const id = req.params.id;
  // const product = products.find((p) => p.id === id);
  try {
    const product = await Product.findById(id);
    res.json(product);
  }
  catch(err) {
    console.log(err);
    res.status(404).json(err);
  }
};

exports.replaceProduct = async (req, res) => {
  console.log("PARAMS: ", req.params);

  const id = req.params.id;
  console.log("ID: ", id);
  // const productIndex = products.findIndex((p) => p.id === id);
  // console.log("Product Index: ", productIndex);
  // products.splice(productIndex, 1, {...req.body, id:id});

  try {
    const product = await Product.findOneAndReplace({_id:id}, req.body, {new: true});
    res.json(product);
  }
  catch(err) {
    console.log(err);
    res.status(400).json(err);
  }
};

exports.updateProduct = async (req, res) => {
  console.log("PARAMS: ", req.params);

  const id = req.params.id;
  console.log("ID: ", id);
  // const productIndex = products.findIndex((p) => p.id === id);
  // console.log("Product Index: ", productIndex);
  // const product = products[productIndex];
  // products.splice(productIndex, 1, {...product, ...req.body});

  try {
    const product = await Product.findOneAndUpdate({_id:id}, req.body, {new: true});
    res.json(product);
  }
  catch(err) {
    console.log(err);
    res.status(400).json(err);
  }
};

exports.deleteProduct = async (req, res) => {
  console.log("PARAMS: ", req.params);

  const id = req.params.id;
  console.log("ID: ", id);
  // const productIndex = products.findIndex((p) => p.id === id);
  // console.log("Product Index: ", productIndex);
  // const product = products[productIndex];
  // products.splice(productIndex, 1);

  try {
    const product = await Product.findOneAndDelete({_id:id});
    res.json(product);
  }
  catch(err) {
    console.log(err);
    res.status(400).json(err);
  }
};
