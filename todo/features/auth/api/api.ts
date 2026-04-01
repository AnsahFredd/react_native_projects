import { CONFIG } from "@/shared/constants/config";
import { AuthResponse, LoginRequest, RegisterRequest } from "../types"
import axios from "axios";

export const login = async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await axios.post(CONFIG.API.AUTH.LOGIN, data);
    return response.data;
}

export const register = async (data: RegisterRequest): Promise<AuthResponse> => {
    const response = await axios.post(CONFIG.API.AUTH.REGISTER, data);
    return response.data;
}

export const logout = async () : Promise<void> => {
    await axios.post(CONFIG.API.AUTH.LOGOUT);
}

export const getCurrentUser = async () : Promise<AuthResponse> => {
    const response = await axios.get(CONFIG.API.AUTH.ME);
    return response.data;
}
