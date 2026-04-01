export const CONFIG = {
  API_URL: process.env.EXPO_PUBLIC_API_URL ?? "https://api.yourapp.com",

  // App ]n routes
  ROUTES: {
    
    LOGIN: "/(auth)/login",
    REGISTER: "/(auth)/register",
    RESET_PASSWORD: "/(auth)/reset-password",
  },

  // API endpoints
  API: {
    AUTH: {
      REGISTER: "/auth/register",
      LOGIN: "/auth/login",
      LOGOUT: "/auth/logout",
      ME: "/auth/me",
    },
    USER: {
      PROFILE: "/user/profile",
      UPDATE: "/user/update",
    },
    TODOS: {
      BASE: "/todos",
      BY_ID: (id: string) => `/todos/${id}`,
    },
  },
} as const;