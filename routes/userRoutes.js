import { Router } from "express";

import  UserController  from '../controller/userController.js';

const userController = new UserController();

const router = Router();

router.post("/create-user", (req, res) => {
    userController.createUser(req, res);
});

export default router;
