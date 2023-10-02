import fs from "fs";
import path from "path";
const __dirname = path.resolve();
// const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "data.json"), "utf-8")
);
const users = data.users;

// API End Points
// CREATE POST METHOD /users
export const createUser = (req, res) => {
  users.push(req.body);
  res.status(201).res.json(req.body);
};

// Read GET METHOD /users
export const getAllusers = (req, res) => {
  res.json(users);
};

// Read GET METHOD BASED ON ID /users/:id
export const getUser = (req, res) => {
  const id = +req.params.id;
  const user = users.find((prod) => prod.id === id);
  res.json(user);
};

// REPLACE user PUT METHOD /users/:id
export const replaceUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((prod) => prod.id === id);
  users.splice(userIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};

// UPDATE user PATCH METHOD /users/:id
export const updateUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((prod) => prod.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1, { ...user, ...req.body });
  res.status(201).json();
};

// DELETE user DELETE METHOD  /users/:id
export const deleteUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((prod) => prod.id === id);
  users.splice(userIndex, 1);
  res.status(201).json();
};
