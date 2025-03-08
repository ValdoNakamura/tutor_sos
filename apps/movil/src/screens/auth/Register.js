import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { register } from '../../../data';

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ tipo, setTipo ] = useState("");
    const [error, setError] = useState(null);

    const handleRegister = async () => {
        try {
            const userData = await register(email, password, tipo);
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
                Registrando una Cuenta
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

                <Picker
                    selectedValue={tipo}
                    onValueChange={(value) => setTipo(value)}
                    style={styles.inputpicker}
                >
                    <Picker.Item label="Selecciona un nombre" value=""/>
                    <Picker.Item label="Maestro" value="maestro"/>
                    <Picker.Item label="Alumno" value="alumno"/>
                </Picker>

                {error && <Text style={{ color: 'red' }}>{error}</Text>}
                <TouchableOpacity style={styles.boton} onPress={handleRegister}>
                    <Text style={styles.text}>Crear Cuenta</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("login")}>
                <Text style={styles.text}>Ya Tengo Cuenta</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default RegisterScreen;


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
        height: 300,
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
    inputpicker: {
        width: 150,
        color: "black",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "black"
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
