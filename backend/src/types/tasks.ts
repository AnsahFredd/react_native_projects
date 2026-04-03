export type Task = {
    id: string;
    name: string;
    description?: string;
    date: Date;
    color: string;
}

export type CreateNewTaskRequest = Omit<Task,"id">;


export type UpdateTaskRequest = {
    taskId: string;
    name: string;
    description?: string;
    date: Date;
    color?: string;
}