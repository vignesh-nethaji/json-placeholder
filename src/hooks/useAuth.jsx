import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children, userData }) => {
    debugger;
    const [user, setUser] = useLocalStorage("user", userData);
    const navigate = useNavigate();

    const login = async (data) => {
        debugger;
        setUser(data);
        navigate("/dashboard/profile", { replace: true });
    };

    const logout = () => {
        debugger;
        setUser(null);
        navigate("/", { replace: true });
    };

    const value = useMemo(
        () => ({
            user,
            login,
            logout
        }),
        [user]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
