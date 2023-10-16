import { Router } from "express";

import  UserController  from '../controller/userController.js';

const userController = new UserController();

const router = Router();

router.use((req, res, next) => {
    try {
      // Verifica se o Content-Type é application/json
      if (req.get("Content-Type") === "application/json") {
        // Analisa o corpo da solicitação como JSON
        JSON.parse(JSON.stringify(req.body));
        next(); // Seguir para a próxima função de middleware ou rota
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
