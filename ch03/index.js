const fs = require("fs");
const express = require("express");
const morgan = require("morgan");

const server = express();
const index = fs.readFileSync("index.html", "utf-8");
const data = { age: 5 };
const jsonData = fs.readFileSync("data.json", "utf-8");
const products = JSON.parse(fs.readFileSync("data.json", "utf-8")).products;

server.use(express.json());
// server.use(express.urlencoded());

server.use(morgan('combined'));
server.use(express.static('public'));

// Middleware
// Application level middlware
// server.use((req, res, next) => {
//   console.log(
//     req.method,
//     req.ip,
//     req.hostname,
//     new Date(),
//     req.get("User-Agent")
//   );
//   next();
// });

// Route level middleware
const auth = (req, res, next) => {
  // console.log("Query: ", req.query);

  if (req.body.password === "123") {
    next();
  } else {
    res.sendStatus(401);
  }
};

// to apply at whole application
// server.use(auth);

// API - ENDPOINT - ROUTE
server.get("/", auth, (req, res) => {
  res.send({ type: "GET" });
});

server.get("/product/:id", (req, res) => {
  console.log("PARAMS: ", req.params);
  res.send({ type: "GET" });
});

server.post("/", auth, (req, res) => {
  res.send({ type: "POST" });
});

server.put("/", (req, res) => {
  res.send({ type: "PUT" });
});

server.patch("/", (req, res) => {
  res.send({ type: "PATCH" });
});

server.delete("/", (req, res) => {
  res.send({ type: "DELETE" });
});

server.get("/demo", (req, res) => {
  // res.status(200).send("<h1>Hello</h1>");
  // res.sendFile('/home/idev/Documents/GitHub/mern-tutorial/ch03/index.html');
  // res.json(products);
  // res.sendStatus(404);
});

server.listen(8080, () => {
  console.log("Server started...");
});
