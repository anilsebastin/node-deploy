import Express from "express";
import {
  createUser,
  getAllusers,
  getUser,
  replaceUser,
  updateUser,
  deleteUser,
} from "../controller/user.js";

const router = Express.Router();

// Routing
router
  .post("/", createUser)
  .get("/", getAllusers)
  .get("/:id", getUser)
  .put("/:id", replaceUser)
  .patch("/:id", updateUser)
  .delete("/:id", deleteUser);

export default router;
