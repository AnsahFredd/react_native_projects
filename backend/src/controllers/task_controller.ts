import { Request, Response } from "express";
import { createTask, updateTask, deleteTask } from "../services/task_service";


export const createTaskController = async (req: Request, res: Response) => {
    try {
        const newTask = await createTask(req.body);
        
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ error: error instanceof Error ? error.message : "An unknown error occurred" });
    }
}

export const updateTaskController = async (req: Request, res: Response) => {
    try {
        const { taskId } = req.params;
        if (!taskId) {
            return res.status(400).json({ error: "Task ID is required" });
        }
        const updatedTask = await updateTask({ ...req.body, taskId });
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(400).json({ error: error instanceof Error ? error.message : "An unknown error occurred" });
    }
}

export const deleteTaskController = async (req: Request, res: Response) => {
    try {
        const { taskId } = req.params;
        if (!taskId) {
            return res.status(400).json({ error: "Task ID is required" });
        }
        const deletedTask = await deleteTask(taskId);
        res.status(200).json(deletedTask);
    } catch (error) {
        res.status(400).json({ error: error instanceof Error ? error.message : "An unknown error occurred" });
    }
}