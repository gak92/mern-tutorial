const fs = require("fs");

const users = JSON.parse(fs.readFileSync("data.json", "utf-8")).users;

exports.createUser = (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.status(201).json(req.body);
};

exports.getAllUsers = (req, res) => {
  res.json(users);
};

exports.getUser = (req, res) => {
  console.log("PARAMS: ", req.params);
  const id = +req.params.id;
  const user = users.find((p) => p.id === id);
  res.json(user);
};

exports.replaceUser = (req, res) => {
  console.log("PARAMS: ", req.params);

  const id = +req.params.id;
  console.log("ID: ", id);
  const userIndex = users.findIndex((u) => u.id === id);
  console.log("User Index: ", userIndex);

  users.splice(userIndex, 1, {...req.body, id:id});

  res.json({"success": "true"});
};

exports.updateUser = (req, res) => {
  console.log("PARAMS: ", req.params);

  const id = +req.params.id;
  console.log("ID: ", id);
  const userIndex = users.findIndex((u) => u.id === id);
  console.log("User Index: ", userIndex);
  const user = users[userIndex];

  users.splice(userIndex, 1, {...user, ...req.body});

  res.json({"success": "true"});
};

exports.deleteUser = (req, res) => {
  console.log("PARAMS: ", req.params);

  const id = +req.params.id;
  console.log("ID: ", id);
  const userIndex = users.findIndex((u) => u.id === id);
  console.log("User Index: ", userIndex);
  const user = users[userIndex];

  users.splice(userIndex, 1);

  res.json(user);
};
