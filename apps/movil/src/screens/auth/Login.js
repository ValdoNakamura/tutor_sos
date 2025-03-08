import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { login } from '../../../data';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        try {
            const userData = await login(email, password);
            console.log('Login exitoso:', userData);
            navigation.navigate('inicio');
        } catch (error) {
            console.error('Error al hacer login:', error);
            setError('Correo o contraseña incorrectos');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Hola Bienvenido a SoS
            </Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Correo electrónico"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                {error && <Text style={{ color: 'red' }}>{error}</Text>}
                <TouchableOpacity style={styles.boton} onPress={handleLogin}>
                    <Text style={styles.text}>Iniciar sesion</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("register")}>
                <Text style={styles.text}>Crear Cuenta</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default LoginScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 20
    },
    form: {
        width: 325,
        height: 250,
        justifyContent: "center",
        backgroundColor: "#EAD196",
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 10
    },
    input: {
        height: 55,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 10
    },
    boton: {
        marginTop: 10,
        height: 50,
        borderRadius: 10,
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#561C24"
    },
    text: {
        fontSize: 20,
        color: "#fff"
    }
})
