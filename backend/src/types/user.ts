export type User = {
    id: string,
    email: string,
    name: string,
}


export type AuthResponse = {
    acessToken: string,
    refreshToken: string;
    user: User,
}


export type LoginRequest = {
    email: string,
    password: string,

}

export type RegisterRequest = {
    email: string,
    password: string,
    name: string,
}

