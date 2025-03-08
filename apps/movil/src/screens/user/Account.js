import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { logout } from '../../../data';

const Account = () => {
    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.boton} onPress={handleLogout}> 
                <Text style={styles.textoBoton}>Cerrar sesión</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    boton: {
        width: 150,
        height: 50,
        borderRadius: 10,
        padding: 5,
        backgroundColor: "#561C24",
        justifyContent: "center",
        alignItems: "center",
    },
    textoBoton: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
