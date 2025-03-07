import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions, Picker, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';

export default function RequestForm() {
    const [tutor, setTutor] = useState('');
    const [category, setCategory] = useState('');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    // Listas de ejemplos para los tutores y categorías
    const tutors = ['Tutor 1', 'Tutor 2', 'Tutor 3'];
    const categories = [
        { id: '1', label: 'Mathematics', icon: '📐' },
        { id: '2', label: 'Science', icon: '🔬' },
        { id: '3', label: 'Literature', icon: '📚' },
    ];

    // Función para seleccionar un archivo
    const selectFile = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            setFile(res);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User canceled the picker');
            } else {
                console.error(err);
            }
        }
    };

    const handleSubmit = () => {
        setLoading(true);
        // Lógica para enviar la petición
        setLoading(false);
        alert('Petición enviada');
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.title}>Petición de Clase</Text>
            </View>
            <Text style={styles.titleSub}>Selecciona los detalles de tu petición</Text>

            <View style={styles.containerRequest}>
                {/* Selección de Tutor */}
                <Text style={styles.label}>Selecciona un Tutor</Text>
                <Picker
                    selectedValue={tutor}
                    onValueChange={(itemValue) => setTutor(itemValue)}
                    style={styles.input}
                >
                    {tutors.map((tutor, index) => (
                        <Picker.Item key={index} label={tutor} value={tutor} />
                    ))}
                </Picker>

                {/* Selección de Categoría */}
                <Text style={styles.label}>Selecciona una Categoría</Text>
                <Picker
                    selectedValue={category}
                    onValueChange={(itemValue) => setCategory(itemValue)}
                    style={styles.input}
                >
                    {categories.map((cat) => (
                        <Picker.Item key={cat.id} label={`${cat.icon} ${cat.label}`} value={cat.id} />
                    ))}
                </Picker>

                {/* Subir archivo */}
                <Text style={styles.label}>Seleccionar archivo</Text>
                <Pressable style={styles.btnFile} onPress={selectFile}>
                    <Text style={styles.textBtnFile}>
                        {file ? `Archivo seleccionado: ${file.name}` : 'Seleccionar archivo'}
                    </Text>
                </Pressable>

                {/* Botón de Enviar */}
                {loading ? (
                    <Text style={styles.loading}>Enviando...</Text>
                ) : (
                    <Pressable style={styles.btnSubmit} onPress={handleSubmit}>
                        <Text style={styles.textBtnSubmit}>Enviar Petición</Text>
                    </Pressable>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    containerHeader: {
        height: 100,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        backgroundColor: '#561C24',
        alignItems: 'center',
    },
    containerRequest: {
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 20,
        height: 350,
        padding: 10,
        backgroundColor: '#EAD196',
    },
    label: {
        fontSize: 16,
        color: '#561C24',
        marginVertical: 5,
    },
    input: {
        marginVertical: 10,
        height: 50,
        borderWidth: 1,
        borderColor: '#561C24',
        borderRadius: 4,
        backgroundColor: '#fff',
        paddingLeft: 10,
    },
    btnFile: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: '#404040',
    },
    textBtnFile: {
        fontSize: 16,
        color: '#fff',
    },
    btnSubmit: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        borderRadius: 10,
        backgroundColor: '#561C24',
    },
    textBtnSubmit: {
        fontSize: 20,
        color: '#fff',
    },
    loading: {
        fontSize: 20,
        color: '#561C24',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    titleSub: {
        fontSize: 20,
        textAlign: 'center',
        color: '#561C24',
        marginBottom: 20,
    },
});
