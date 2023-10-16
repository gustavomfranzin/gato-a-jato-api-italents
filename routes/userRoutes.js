import { Router } from "express";

import  UserController  from '../controller/userController.js';

const userController = new UserController();

const router = Router();

router.use((req, res, next) => {
    try {
      if (req.get("Content-Type") === "application/json") {
        JSON.parse(JSON.stringify(req.body));
        next();
      } else {
        res.status(400).json({ error: "Content-Type deve ser application/json" });
      }
    } catch (error) {
      res.status(400).json({ error: "JSON inválido" });
    }
  });

router.post("/create-user", (req, res) => {
    userController.createUser(req, res);
});

export default router;
