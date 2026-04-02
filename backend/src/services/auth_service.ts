import { LoginRequest, RegisterRequest, AuthResponse } from "../types/user"
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { UserModel } from "../models/user";

export const LoginService = async (credentials: LoginRequest) => {
    try {
        const existingUser = await UserModel.findOne({ email: credentials.email });
        if(!existingUser) {
            throw new Error("User not found");
        } 

        const isMatch = await bcrypt.compare(credentials.password, existingUser.password);
        if(!isMatch) {
            throw new Error("Invalid password");
        }

        const accessToken = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET as string, { expiresIn: process.env.JWT_EXPIRES_IN as any});
        const refreshToken = jwt.sign({ id: existingUser._id }, process.env.JWT_REFRESH_SECRET as string, { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN  as any });

        return { user: { id: existingUser._id, email: existingUser.email, name: existingUser.name }, accessToken, refreshToken }
    } catch (error) { 
      throw new Error(error instanceof Error ? error.message : "An unknown error occurred");       
    }

}

export const RegisterService = async (credentials: RegisterRequest) => {
    try {
        const existingUser = await UserModel.findOne({ email: credentials.email });

        if(existingUser) {
            throw new Error("User already exists");
        }

        const passwordHash = await bcrypt.hash(credentials.password, 10);

        const user = await UserModel.create({
            name: credentials.name,
            email: credentials.email,
            password: passwordHash,
        });

        const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: process.env.JWT_EXPIRES_IN as any });
        const refreshToken = jwt.sign({ id: user._id }, process.env.JWT_REFRESH_SECRET as string, { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN as any });

        return { user: { id: user._id, email: user.email, name: user.name }, accessToken, refreshToken };
    } catch (error) {
        throw new Error(error instanceof Error ? error.message: "An unknown error occurred");
    }
}

export const ResetPasswordService = () => {}

export const GetCurrentUserService = async (id: string) => {
  try {
    const user = await UserModel.findById(id).select("-password");
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "An unknown error occurred");
  }
};