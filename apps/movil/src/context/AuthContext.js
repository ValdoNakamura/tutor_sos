import React, { createContext, useContext, useState, useEffect } from 'react';
import {  onAuthStateChanged, signOut } from 'firebase/auth'; 
import { FireBase_Auth } from '../../data';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const auth = FireBase_Auth;

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setIsAuthenticated(!!currentUser);
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, [auth]);

    const logout = async () => {
        try {
            await signOut(auth);
            setIsAuthenticated(false);
            setUser(null);
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
