import { login, register, logout, getCurrentUser } from "../api/api";
import { LoginRequest, RegisterRequest, AuthResponse } from "../types";

export const loginUser = async (credentials: LoginRequest) => {
    try {
        if(!credentials.email || !credentials.password) {
            throw new Error("Email and password are required");
        }

        const response = await login(credentials);

        if (!response.user) {
            throw new Error("Invalid user");
        }
        if(!response.accessToken) {
            throw new Error("Invalid access token");
        }

        return response;

    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "An unknown error occurred");
    }
}

export const RegisterUser = async (credentials: RegisterRequest) => {
    try {
        if(!credentials.email || !credentials.password || !credentials.name) {
            throw new Error("Email, password and name are required");
        }

        const response = await register(credentials);
        if (!response.user) {
            throw new Error("Registration failed");
        }

        if(!response.accessToken) {
            throw new Error("Invalid access token");
        }

        return response;

    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "An unknown error occurred");
    }
}

export const logoutUser = async (): Promise<void> => {
    try {
        await logout();
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "An unknown error occurred");
    }
}

export const fetchCurrentUser = async (): Promise<AuthResponse> => {
    try {
        const response = await getCurrentUser();
        if (!response.user) {
            throw new Error("Failed to fetch user");
        }
        if(!response.accessToken) {
            throw new Error("Invalid access token");
        }
        return response;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "An unknown error occurred");
    }
}