export const CONFIG = {
  API_URL: process.env.EXPO_PUBLIC_API_URL ?? "https://api.yourapp.com",

  ENDPOINTS: {
    // Auth
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    RESET_PASSWORD: "/auth/reset-password",
    LOGOUT: "/auth/logout",

    // User
    PROFILE: "/user/profile",
    UPDATE_PROFILE: "/user/update",

    // Todos
    TODOS: "/todos",
    TODO_BY_ID: (id: string) => `/todos/${id}`,
    CREATE_TODO: "/todos/create",
    DELETE_TODO: (id: string) => `/todos/${id}`,
  },
} as const;
