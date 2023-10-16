import { Router } from "express";
import UserController from "../controller/userController.js";

const userController = new UserController();
const router = Router();

router.post("/create-user", (req, res) => {
  userController.createUser(req, res);
});

router.put("/update-user/:cod", (req, res) => {
  userController.updateUser(req, res);
});

router.delete("/delete-user/:cod", (req, res) => {
  userController.deleteUser(req, res);
});

export default router;
