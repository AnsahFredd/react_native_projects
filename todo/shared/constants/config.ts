const API_URL = process.env.EXPO_PUBLIC_API_URL ?? "http://10.0.2.2:5000/api";

export const CONFIG = {

  // App ]n routes
  ROUTES: {
    LOGIN: "/(auth)/login",
    REGISTER: "/(auth)/register",
    RESET_PASSWORD: "/(auth)/reset-password",
    HOME: "/home",
    PROFILE: "/profile",
     SETTINGS: "/settings",
  },

  // API endpoints
  API: {
    AUTH: {
      REGISTER: `${API_URL}/auth/register`,
      LOGIN: `${API_URL}/auth/login`,
      LOGOUT: `${API_URL}/auth/logout`,
      ME: `${API_URL}/auth/me`,
    },
    USER: {
      PROFILE: `${API_URL}/user/profile`,
      UPDATE: `${API_URL}/user/update`,
    },
    TODOS: {
      BASE: `${API_URL}/todos`,
      BY_ID: (id: string) => `${API_URL}/todos/${id}`,
    },
  },
} as const;