import React, { createContext, useState } from "react";
import Api from "../../services/api";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const navigation = useNavigation();

    function Signup(name: string, email: string, password: string) {
        try {
            const response = Api.post("/users", {
                name: name,
                email: email,
                password: password
            })
                .then(function (response) {
                    navigation.goBack();
                })
                .catch(function (error) {
                    console.log("Error register :::::::::: " + error)
                })
        }
        catch (error) {
        }
    }
    return (
        <AuthContext.Provider value={{ Signup }} >
            {children}
        </AuthContext.Provider>
    )
}




