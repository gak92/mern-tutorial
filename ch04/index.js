const fs = require("fs");
const express = require("express");
// const morgan = require("morgan");

const server = express();
const index = fs.readFileSync("index.html", "utf-8");
const data = { age: 5 };
const jsonData = fs.readFileSync("data.json", "utf-8");
const products = JSON.parse(fs.readFileSync("data.json", "utf-8")).products;

server.use(express.json());
// server.use(express.urlencoded());

// server.use(morgan('combined'));
server.use(express.static('public'));



// API - ENDPOINT - ROUTE

// Products ======= C R U D

// Create - POST /products
server.post("/products", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(201).json(req.body);
});

// Read - GET /products
server.get("/products", (req, res) => {
  res.json(products);
});

// Read - GET /products/:id
server.get("/products/:id", (req, res) => {
  console.log("PARAMS: ", req.params);
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
});

// Update - PUT /products/:id
// PUT overwrite the data
server.put("/products/:id", (req, res) => {
  console.log("PARAMS: ", req.params);

  const id = +req.params.id;
  console.log("ID: ", id);
  const productIndex = products.findIndex((p) => p.id === id);
  console.log("Product Index: ", productIndex);

  products.splice(productIndex, 1, {...req.body, id:id});

  res.json({"success": "true"});
});

// Update - PATCH /products/:id
// PATCH don't overwrite the data
server.patch("/products/:id", (req, res) => {
  console.log("PARAMS: ", req.params);

  const id = +req.params.id;
  console.log("ID: ", id);
  const productIndex = products.findIndex((p) => p.id === id);
  console.log("Product Index: ", productIndex);
  const product = products[productIndex];

  products.splice(productIndex, 1, {...product, ...req.body});

  res.json({"success": "true"});
});

// Delete - DELETE /products/:id
server.delete("/products/:id", (req, res) => {
  console.log("PARAMS: ", req.params);

  const id = +req.params.id;
  console.log("ID: ", id);
  const productIndex = products.findIndex((p) => p.id === id);
  console.log("Product Index: ", productIndex);
  const product = products[productIndex];

  products.splice(productIndex, 1);

  res.json(product);
});


// server.put("/", (req, res) => {
//   res.send({ type: "PUT" });
// });

// server.patch("/", (req, res) => {
//   res.send({ type: "PATCH" });
// });

// server.delete("/", (req, res) => {
//   res.send({ type: "DELETE" });
// });

server.get("/demo", (req, res) => {
  // res.status(200).send("<h1>Hello</h1>");
  // res.sendFile('/home/idev/Documents/GitHub/mern-tutorial/ch03/index.html');
  // res.json(products);
  // res.sendStatus(404);
});

server.listen(8080, () => {
  console.log("Server started...");
});
