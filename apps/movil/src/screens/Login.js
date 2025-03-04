import { useState } from 'react';
import { View, TextInput, StyleSheet, ActivityIndicator, Text, Pressable, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    {/*

        const handleLogin = async () => {
            try {
                const user = await login(email, password);
                loginUser(user);
                alert(`Inicio de sesión exitoso. Bienvenido ${user.email}`);
                navigation.replace('home');
            } catch (error) {
                alert(`Error: ${error.message}`);
            }
        };
        
    */}

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.title}>SoS</Text>
            </View>
            <Text style={styles.titleSub}>Hola Bienvenidos a SoS</Text>

            <View style={styles.containerLogin}>
                <TextInput
                    value={email}
                    style={styles.input}
                    placeholder='Email'
                    autoCapitalize='none'
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    value={password}
                    style={styles.input}
                    placeholder='Password'
                    autoCapitalize='none'
                    secureTextEntry
                    onChangeText={(pass) => setPassword(pass)}
                />
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <View>
                        <Pressable style={styles.btnLogin}>
                            <Text style={styles.textBtnLogin}>Login</Text>
                        </Pressable>
                        <Pressable style={styles.btnLogin}>
                            <Text style={styles.textBtnLogin}>Create Account</Text>
                        </Pressable>
                    </View>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    containerHeader: {
        height: '100',
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        backgroundColor: '#561C24'
    },
    containerLogin: {
        display: 'flex', 
        justifyContent:'center',
        borderRadius: 20,
        height: 280,
        padding: 10,
        backgroundColor: '#EAD196'
    },
    input: {
        marginVertical: 5,
        height: 50,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 4,
        backgroundColor: '#fff',

    },
    
    btnLogin:{
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        borderRadius: 10,
        backgroundColor: '#404040'
    },
    textBtnLogin: {
        fontSize: 20,
        color: '#fff'
    },
    title: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#FFFFFF',
        paddingLeft: '10'
    },
    titleSub: {
        fontSize: 30,
        textAlign: 'center',
        color: '#561C24'
    },
    error: {
        color: 'red',
        marginTop: 10,
        textAlign: 'center',
    },
});