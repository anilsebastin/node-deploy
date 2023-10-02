import Express from "express";
import {
  createProduct,
  getAllProducts,
  getProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
} from "../controller/product.js";

const router = Express.Router();

// Routing
router
  .post("/", createProduct)
  .get("/", getAllProducts)
  .get("/:id", getProduct)
  .put("/:id", replaceProduct)
  .patch("/:id", updateProduct)
  .delete("/:id", deleteProduct);

export default router;
