import * as dotenv from "dotenv";
import Express from "express";
import productRouter from "./routes/products.js";
import userRouter from "./routes/users.js";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
const __dirname = path.resolve();
const { Schema } = mongoose;
//const path = require("path");
const server = Express();

dotenv.config();
console.log("DB Password ", process.env.DB_PASSWORD);

// DB Connection
main().catch((err) => console.log(err));

async function main() {
  //await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  await mongoose.connect(process.env.MONGO_DB_URL);
  console.log("db server connected");
}

//body parser
server.use(cors());
server.use(Express.json());
server.use(Express.static(path.resolve(__dirname, process.env.BUILD_DIR)));
server.use("/api/products", productRouter);
server.use("/api/users", userRouter);
server.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

server.listen(process.env.PORT, () => {
  console.log("Server started ");
});
