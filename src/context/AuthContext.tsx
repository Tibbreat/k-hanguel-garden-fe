import { createContext, useState, type ReactNode } from "react";

interface IToken {
    accessToken: string;
    refreshToken: string;
}

interface IAuthContext {
    token: IToken | null;
    login: (token: IToken) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

export const AuthContext = createContext<IAuthContext | null>(null);

// Provider
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<IToken | null>(null);

    const login = (token: IToken) => {
        setToken(token);
    };

    const logout = () => {
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, login, logout, isAuthenticated: !!token }}>
            {children}
        </AuthContext.Provider>
    );
};