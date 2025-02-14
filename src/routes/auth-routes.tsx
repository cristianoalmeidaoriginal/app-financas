import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/login";
import Register from "../pages/register";

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
            <Stack.Screen name="Register" component={Register} options={{title:'Login'}} />
        </Stack.Navigator>
    )
}