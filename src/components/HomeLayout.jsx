import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks";
import { AppBar } from "./AppBar";

export const HomeLayout = () => {
    const { user } = useAuth();
    const outlet = useOutlet();

    if (user) {
        return <Navigate to="/dashboard/profile" replace />;
    }

    return (
        <div>
            <AppBar
                pages={[
                    { label: "Landing", path: "/" },
                    { label: "Home", path: "/home" },
                    { label: "Login", path: "/login" }
                ]}
            />
            {outlet}
        </div>
    );
};
