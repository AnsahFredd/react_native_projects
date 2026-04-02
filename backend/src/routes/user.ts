import { Router } from "express";
import { loginController, registerController, getCurrentUserController } from "../controllers/user_controller";
import { authMiddleware } from "../middleware/auth_middleware";

const authRoutes = Router();

// login route
authRoutes.post("/login", loginController);

// register route
authRoutes.post("/register", registerController);

// get current user route
authRoutes.get("/me", authMiddleware, getCurrentUserController);

export default authRoutes;