import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/Ionicons";

const categoryIcons = {
    escuela: "school",
    alerta: "alert-circle",
    deporte: "football",
    medico: "medkit",
};

export default function SosForm() {
    const [nameTutor, setNameTutor] = useState("");
    const [category, setCategory] = useState("escuela");

    return (
        <>
            <Text style={styles.title}>¿Quieres Hacer un SoS?</Text>

            <View style={styles.form}>
                <Text style={styles.label}>Tutor</Text>
                <Picker
                    selectedValue={nameTutor}
                    onValueChange={(value) => setNameTutor(value)}
                    style={styles.inputpicker}
                >
                    <Picker.Item label="Selecciona un nombre" value=""/>
                    <Picker.Item label="Sergio Ulises Galvan" value="Sergio Ulises Galvan"/>
                    <Picker.Item label="Victor Hugo Sanchez" value="Victor Hugo Sanchez"/>
                    <Picker.Item label="Naruto Uzumaki" value="Naruto Uzumaki"/>
                </Picker>

                <Text style={styles.label}>Descripción</Text>
                <TextInput style={styles.input} multiline placeholder="Escribe aquí..." placeholderTextColor="#fff" />

                <View style={styles.row}>
                    <View>
                        <Text style={styles.label}>Categoría</Text>
                        <View style={styles.category}>
                            <Icon name={categoryIcons[category]} size={30} color="#fff" />
                            <Picker
                                selectedValue={category}
                                onValueChange={(value) => setCategory(value)}
                                style={styles.hiddenPicker}
                            >
                                <Picker.Item label="Escuela" value="escuela" />
                                <Picker.Item label="Alerta" value="alerta" />
                                <Picker.Item label="Deporte" value="deporte" />
                                <Picker.Item label="Médico" value="medico" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.attachment} />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = {
    title: {
        fontSize: 25,
        color: "#000",
        fontWeight: "bold",
        marginTop: 10
    },
    form: {
        backgroundColor: "#E6C38B",
        padding: 15,
        borderRadius: 10,
        width: "90%",
        marginTop: 25
    },
    label: {
        color: "#5A2424",
        fontWeight: "bold",
        marginVertical: 5
    },
    inputpicker: {
        backgroundColor: "#5A2424",
        color: "#fff",
        borderRadius: 20,
    },
    input: {
        backgroundColor: "#5A2424",
        color: "#fff",
        height: 80,
        padding: 8,
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
        position: "relative"
    },
    attachment: {
        width: 100,
        height: 90,
        backgroundColor: "#5A2424",
        borderRadius: 5,
    },
    button: {
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#5A2424",
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    hiddenPicker: {
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity: 0,
        zIndex: 3
    }
};
