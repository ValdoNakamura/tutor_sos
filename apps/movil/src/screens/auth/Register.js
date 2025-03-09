import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { register } from '../../../data';

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [tipo, setTipo] = useState('');
    const [name, setName] = useState('');
    const [grupo, setGrupo] = useState('');
    const [error, setError] = useState(null);

    const handleRegister = async () => {
        try {
            const userData = await register(email, password, name, tipo, tipo === "alumno" ? grupo : null);
            console.log('Registro exitoso:', userData);
            navigation.navigate('inicio');
        } catch (error) {
            console.error('Error al registrar:', error);
            setError('Hubo un error al registrar la cuenta');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Registrando una Cuenta</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    value={name}
                    onChangeText={setName}
                />
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
                    <Picker.Item label="Selecciona un rol" value=""/>
                    <Picker.Item label="Maestro" value="maestro"/>
                    <Picker.Item label="Alumno" value="alumno"/>
                </Picker>

                {/* Picker para seleccionar grupo (solo si el tipo es Alumno) */}
                {tipo === "alumno" && (
                    <Picker
                        selectedValue={grupo}
                        onValueChange={(value) => setGrupo(value)}
                        style={styles.inputpicker}
                    >
                        <Picker.Item label="Selecciona tu grupo" value=""/>
                        <Picker.Item label="Grupo A" value="A"/>
                        <Picker.Item label="Grupo B" value="B"/>
                        <Picker.Item label="Grupo C" value="C"/>
                    </Picker>
                )}

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
        padding: 10,
        backgroundColor: "#EAD196",
        borderRadius: 10
    },
    input: {
        height: 55,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 10,
        paddingHorizontal: 10
    },
    inputpicker: {
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 10
    },
    boton: {
        marginTop: 10,
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#561C24",
        padding: 10
    },
    text: {
        fontSize: 20,
        color: "#fff"
    }
});
