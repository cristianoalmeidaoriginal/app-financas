import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {

    function Signup() {

        console.log('Teste');
    }
    return (
        <AuthContext.Provider value={{ Signup }} >
            {children}
        </AuthContext.Provider>
    )
}




