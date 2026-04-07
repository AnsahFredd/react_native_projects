import { Router } from "express";
import { authMiddleware } from "../middleware/auth_middleware";
import { createTaskController, updateTaskController, deleteTaskController } from "../controllers/task_controller";

const taskRoutes = Router();


taskRoutes.post("/", authMiddleware, createTaskController);
taskRoutes.put("/:taskId", authMiddleware, updateTaskController);
taskRoutes.delete("/:taskId", authMiddleware, deleteTaskController);

export default taskRoutes;