import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
        <Text style={styles.headerText}>Encabezado Personalizado</Text>
        </View>
    );
    }

    const styles = StyleSheet.create({
    header: {
        backgroundColor: '#1e90ff',
        padding: 15,
        alignItems: 'center',
    },
    headerText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Header;