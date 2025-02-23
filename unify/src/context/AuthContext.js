// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    
    const predefinedCredentials = {
        email: 'admin@example.com',
        password: 'password123',
    };

    const login = (email, password) => {
       
        if (email === predefinedCredentials.email && password === predefinedCredentials.password) {
            setUser({ email });
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
