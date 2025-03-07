import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

export default function SosForm() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>¿Quieres Hacer un SoS?</Text>

            <View style={styles.form}>
                <Text style={styles.label}>Tutor</Text>
                <TextInput style={styles.input} placeholder="Nombre del Tutor" placeholderTextColor="#fff" />

                <Text style={styles.label}>Descripción</Text>
                <TextInput style={styles.input} multiline placeholder="Escribe aquí..." placeholderTextColor="#fff" />

                <View style={styles.row}>
                    <View>
                        <Text style={styles.label}>category</Text>
                        <View style={styles.category}>
                            <Icon name="school" size={30} color="#fff" />
                        </View>
                    </View>
                    <View style={styles.attachment} />
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Enviar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = {
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 70,
    },
    title: {
        fontSize: 18,
        color: "#000",
        fontWeight: "bold",
    },
    form: {
        backgroundColor: "#E6C38B",
        padding: 15,
        borderRadius: 10,
        width: "90%",
        height: "65%",
        marginTop: 10,
    },
    label: {
        color: "#5A2424",
        fontWeight: "bold",
    },
    input: {
        backgroundColor: "#5A2424",
        color: "#fff",
        height: 60,
        padding: 8,
        borderRadius: 5,
        marginVertical: 5,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
    },
    category: {
        width: 50,
        height: 50,
        backgroundColor: "#5A2424",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
    },
    attachment: {
        width: 100,
        height: 90,
        backgroundColor: "#5A2424",
        borderRadius: 5,
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10,
    },
    button: {
        backgroundColor: "#5A2424",
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
};
