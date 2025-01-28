
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
    return (
        <LinearGradient
            colors={['#000000', '#5A3826']} // Black to brown gradient
            style={styles.background}
        >
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#5A3826" />
                {/* Coffee Image */}
                <Image
                    source={require('../assets/welcomePage.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
                {/* Text Section */}
                <Text style={styles.title}>Choice your Favorite Coffee</Text>
                <Text style={styles.subtitle}>
                    The best grain, the finest roast, the most powerful flavour.
                </Text>
                {/* Button */}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    image: {
        width: "100%",
        height: "50%",
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFFFFF",
        textAlign: "center",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#D3B8A6",
        textAlign: "center",
        marginBottom: 30,
    },
    button: {
        backgroundColor: "#FFB74D", // Yellow-orange button
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },
});

