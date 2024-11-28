import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

const PaymentScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons name="arrow-back" size={24} color="#fff" />
                <Text style={styles.headerText}>Payment</Text>
            </View>

            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <FontAwesome name="cc-visa" size={32} color="#fff" style={styles.cardIcon} />
                    <Text style={styles.cardNumber}>3897 8923 6745 4638</Text>
                    <View style={styles.cardDetails}>
                        <Text style={styles.cardHolder}>Robert Evans</Text>
                        <Text style={styles.expiryDate}>02/30</Text>
                    </View>
                </View>
            </View>

            <View style={styles.paymentMethods}>
                <TouchableOpacity style={styles.paymentMethod}>
                    <MaterialIcons name="account-balance-wallet" size={24} color="#fff" />
                    <Text style={styles.paymentMethodText}>Wallet</Text>
                    <Text style={styles.walletAmount}>$100.50</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.paymentMethod}>
                    <Image source={require("../assets/google-pay.png")} style={styles.paymentIcon} />
                    <Text style={styles.paymentMethodText}>Google Pay</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.paymentMethod}>
                    <Image source={require("../assets/apple-pay.png")} style={styles.paymentIcon} />
                    <Text style={styles.paymentMethodText}>Apple Pay</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.paymentMethod}>
                    <Image source={require("../assets/amazon-pay.png")} style={styles.paymentIcon} />
                    <Text style={styles.paymentMethodText}>Amazon Pay</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <Text style={styles.price}>$4.20</Text>
                <TouchableOpacity style={styles.payButton}>
                    <Text style={styles.payButtonText}>Pay from Credit Card</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        paddingHorizontal: 16,
        
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 60,
        marginBottom: 20,
    },
    headerText: {
        fontSize: 18,
        color: "#fff",
        marginLeft: 10,
        
    },
    cardContainer: {
        backgroundColor: "#1e1e1e",
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        marginTop: 20,
    },
    card: {
        backgroundColor: "#242424",
        borderRadius: 12,
        padding: 20,
    },
    cardIcon: {
        position: "absolute",
        top: 10,
        right: 10,
    },
    cardNumber: {
        fontSize: 18,
        color: "#fff",
        marginBottom: 10,
    },
    cardDetails: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    cardHolder: {
        fontSize: 14,
        color: "#fff",
    },
    expiryDate: {
        fontSize: 14,
        color: "#fff",
    },
    paymentMethods: {
        marginBottom: 20,
    },
    paymentMethod: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1e1e1e",
        borderRadius: 12,
        padding: 16,
        marginBottom: 10,
    },
    paymentMethodText: {
        fontSize: 16,
        color: "#fff",
        marginLeft: 16,
        flex: 1,
    },
    walletAmount: {
        fontSize: 16,
        color: "#fff",
    },
    paymentIcon: {
        width: 24,
        height: 24,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
    },
    price: {
        fontSize: 24,
        color: "#fff",
    },
    payButton: {
        backgroundColor: "#ff7f50",
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 12,
    },
    payButtonText: {
        fontSize: 16,
        color: "#fff",
    },
});

export default PaymentScreen;
