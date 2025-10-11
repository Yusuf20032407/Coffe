import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuth, setIsAuth] = useState(() => localStorage.getItem("isAuth") === "true");

    useEffect(() => {
        const savedAuth = localStorage.getItem("isAuth");
        if (savedAuth === "true") {
            setIsAuth(true);
        }
    }, []);

    const login = () => {
        setIsAuth(true);
        localStorage.setItem("isAuth", "true");
    };

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem("isAuth");
    };

    return (
        <AuthContext.Provider value={{ isAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
