import { Request, Response } from "express";
import { LoginService, RegisterService, GetCurrentUserService } from "../services/auth_service";

export const loginController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const response = await LoginService({ email, password });

        return res.status(200).json(response);

    } catch (error) {
        return res.status(401).json({ message: error instanceof Error ? error.message : "An unknown error occurred" });
    }
}


export const registerController = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Name, email and password are required" });
        }

        const response = await RegisterService({ name, email, password });

        return res.status(201).json(response);
    } catch (error) {
        return res.status(400).json({ message: error instanceof Error ? error.message : "An unknown error occurred" });
    }
}

export const getCurrentUserController = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).userId;
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const user = await GetCurrentUserService(userId);
        return res.status(200).json({ user });
    } catch (error) {
        return res.status(400).json({ message: error instanceof Error ? error.message : "An unknown error occurred" });
    }
}