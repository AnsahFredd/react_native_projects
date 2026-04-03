export interface User {
    id: string;
    email: string;
    name?: string;
}

export interface AuthResponse {
  accessToken: string;
  user: User;
}

export interface LoginRequest {
   email: string;
   password: string
}

export interface RegisterRequest {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}