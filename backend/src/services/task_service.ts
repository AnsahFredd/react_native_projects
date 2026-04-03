import { taskModel } from "../models/task";
import { CreateNewTaskRequest, UpdateTaskRequest } from "../types/tasks";

export const createTask = async (data: CreateNewTaskRequest) => {
  try {
    const { name, description, date, color } = data;
    if (!name || !date || !color) {
      throw new Error("Missing required fields");
    }

    if (isNaN(Date.parse(date.toString()))) {
      throw new Error("Invalid date format");
    }

    const newTask = await taskModel.create({
      name,
      description,
      date,
      color,
    });

    return newTask;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred",
    );
  }
};


export const updateTask = async (data: UpdateTaskRequest) => {
    try {
        const updatedTask = await taskModel.findByIdAndUpdate(data.taskId, data, { new: true });
        if (!updatedTask) {
            throw new Error("Task not found");
        }

        return updatedTask;
    } catch (error) {
        throw new Error(
            error instanceof Error ? error.message : "An unknown error occurred"
        );
    }
}

export const deleteTask = async (taskId: string) => {
    try {
        const deletedTask = await taskModel.findByIdAndDelete(taskId);
        if (!deletedTask) {
            throw new Error("Task not found");
        }
        return deletedTask;
    } catch (error) {
        throw new Error(
            error instanceof Error ? error.message : "An unknown error occurred"
        );
    }
}