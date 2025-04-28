import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const DataPrivacyScreen: React.FC = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Data Privacy Policy</Text>
            <Text style={styles.content}>
                Welcome to our Data Privacy Policy page. Here, we explain how we collect, use, and protect your personal data.
            </Text>
            <Text style={styles.content}>
                Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it.
            </Text>
            {/* Add more content or sections as needed */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 12,
    },
});

export default DataPrivacyScreen;