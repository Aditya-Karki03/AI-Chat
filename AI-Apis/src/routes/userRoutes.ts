import { Router } from "express";
import { AuthController } from "../controllers/UserController";

const authController = new AuthController();
const userRoutes = Router();
userRoutes.post("/login", authController.getUser);
userRoutes.post("/signup", authController.createUser);

export default userRoutes;
