require('dotenv').config();
const express = require("express");
const server = express();
const mongoose = require('mongoose');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

console.log("eeNV:", process.env.PORT);

// DB Connection
// mongoose.connect('mongodb://127.0.0.1:27017/coderdost');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/coderdost');
  console.log("DB connected");
}

// bodyparser
server.use(express.json());

// Routes
server.use('/products', productRouter.router);
server.use('/users', userRouter.router);


server.listen(process.env.PORT, () => {
  console.log("Server started...");
});
