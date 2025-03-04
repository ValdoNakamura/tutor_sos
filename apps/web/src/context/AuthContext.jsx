import { createContext, useContext, useState, useEffect } from "react";
import { logout, onAuthStateChanged, FireBase_Auth } from "@shared/firebase";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(FireBase_Auth, (firebaseUser) => {
            console.log("Usuario detectado:", firebaseUser);
            setUser(firebaseUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const loginUser = (userData) => {
        setUser(userData);
    };

    const logoutUser = async () => {
        try {
            await logout();
            setUser(null);
        } catch (error) {
            console.error("Error cerrando sesión:", error.message);
        }
    };

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
