import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/Logo.png')} style={{ marginBottom: 10 }} />
            <TextInput style={styles.textInput} placeholder='Usuário' />
            <TextInput style={styles.textInput} placeholder='Senha' />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Acessar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text>Criar conta</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        color: '#f3f3f3',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    textInput: {
        //backgroundColor: '#545454',
        backgroundColor: '#fff',
        width: '90%',
        height: 50,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10
    },
    button: {
        width: '90%',
        height: 50,
        borderRadius: 5,
        backgroundColor: '#42b80b',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    textButton: {
        fontSize: 17
    },
});