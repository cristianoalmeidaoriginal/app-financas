import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from "../../contexts/auth/auth";

export default function Register() {

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { Signup } = useContext(AuthContext);

    function handleSignup() {
        Signup();

    }
    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <View style={styles.areaInput}>
                    <TextInput style={styles.input} placeholder='nome' value={nome} onChangeText={(text)=>setNome(text)} />
                </View>
                <View style={styles.areaInput}>
                    <TextInput style={styles.input} placeholder='email' value={email} onChangeText={(text)=>setEmail(text) />
                </View>
                <View style={styles.areaInput}>
                    <TextInput style={styles.input} placeholder='senha' value={password}onChangeText={(text)=>setPassword(text) />
                </View>
                <TouchableOpacity activeOpacity={0.9} style={styles.buttonRegister} onPress={handleSignup}>
                    <Text style={styles.textButtonRegister}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    areaInput: {
        flexDirection: 'row',
    },
    input: {
        width: '90%',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff'

    },
    buttonRegister: {
        width: '90%',
        height: 50,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#454980',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButtonRegister: {
        fontSize: 20,
        color: '#fff'
    }
});