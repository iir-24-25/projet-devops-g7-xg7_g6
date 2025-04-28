import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GeneralPreferenceScreen: React.FC = () => {
    const handleLogout = () => {
        // Add logout logic here
        console.log('User logged out');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Account Screen</Text>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default GeneralPreferenceScreen;