import { Router } from "express";

const taskRoutes = Router();
import { authMiddleware } from "../middleware/auth_middleware";
import { createTaskController, updateTaskController, deleteTaskController } from "../controllers/task_controller";


taskRoutes.post("/", authMiddleware, createTaskController);
taskRoutes.put("/:taskId", authMiddleware, updateTaskController);
taskRoutes.delete("/:taskId", authMiddleware, deleteTaskController);

export default taskRoutes;