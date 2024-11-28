import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

const OrderHistoryScreen = () => {
    const orders = [
        {
            date: "20th March 16:23",
            total: "$74.40",
            items: [
                {
                    image: require("../assets/coffee/cappuccino_pic_1_square.png"), // Replace with your asset path
                    title: "Cappuccino",
                    description: "With Steamed Milk",
                    price: "$37.20",
                    sizes: [
                        { label: "S", price: "$4.20", quantity: 2, total: "$8.40" },
                        { label: "M", price: "$6.20", quantity: 2, total: "$12.40" },
                        { label: "L", price: "$8.20", quantity: 2, total: "$16.40" },
                    ],
                },
            ],
        },
        {
            date: "19th March 2023",
            total: "$74.40",
            items: [
                {
                    image: require("../assets/beans/excelsa_coffee_beans_square.png"), // Replace with your asset path
                    title: "Liberica Beans",
                    description: "From Africa",
                    price: "$37.20",
                    sizes: [
                        { label: "250gm", price: "$4.20", quantity: 2, total: "$8.40" },
                        { label: "500gm", price: "$6.20", quantity: 2, total: "$12.40" },
                        { label: "1Kg", price: "$8.20", quantity: 2, total: "$16.40" },
                    ],
                },
            ],
        },

        {
            date: "20th March 16:23",
            total: "$74.40",
            items: [
                {
                    image: require("../assets/coffee/cappuccino_pic_1_square.png"), // Replace with your asset path
                    title: "Cappuccino",
                    description: "With Steamed Milk",
                    price: "$37.20",
                    sizes: [
                        { label: "S", price: "$4.20", quantity: 2, total: "$8.40" },
                        { label: "M", price: "$6.20", quantity: 2, total: "$12.40" },
                        { label: "L", price: "$8.20", quantity: 2, total: "$16.40" },
                    ],
                },
            ],
        },
        {
            date: "19th March 2023",
            total: "$74.40",
            items: [
                {
                    image: require("../assets/beans/excelsa_coffee_beans_square.png"), // Replace with your asset path
                    title: "Liberica Beans",
                    description: "From Africa",
                    price: "$37.20",
                    sizes: [
                        { label: "250gm", price: "$4.20", quantity: 2, total: "$8.40" },
                        { label: "500gm", price: "$6.20", quantity: 2, total: "$12.40" },
                        { label: "1Kg", price: "$8.20", quantity: 2, total: "$16.40" },
                    ],
                },
            ],
        },
        {
            date: "20th March 16:23",
            total: "$74.40",
            items: [
                {
                    image: require("../assets/coffee/cappuccino_pic_1_square.png"), // Replace with your asset path
                    title: "Cappuccino",
                    description: "With Steamed Milk",
                    price: "$37.20",
                    sizes: [
                        { label: "S", price: "$4.20", quantity: 2, total: "$8.40" },
                        { label: "M", price: "$6.20", quantity: 2, total: "$12.40" },
                        { label: "L", price: "$8.20", quantity: 2, total: "$16.40" },
                    ],
                },
            ],
        },
        {
            date: "19th March 2023",
            total: "$74.40",
            items: [
                {
                    image: require("../assets/beans/excelsa_coffee_beans_square.png"), // Replace with your asset path
                    title: "Liberica Beans",
                    description: "From Africa",
                    price: "$37.20",
                    sizes: [
                        { label: "250gm", price: "$4.20", quantity: 2, total: "$8.40" },
                        { label: "500gm", price: "$6.20", quantity: 2, total: "$12.40" },
                        { label: "1Kg", price: "$8.20", quantity: 2, total: "$16.40" },
                    ],
                },
            ],
        },
    ];

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <MaterialIcons name="menu" size={24} color="#fff" />
                <Text style={styles.headerText}>Order History</Text>
                <FontAwesome name="user-circle" size={24} color="#fff" />
            </View>

            {/* Orders */}
            <ScrollView>
                {orders.map((order, index) => (
                    <View key={index} style={styles.orderCard}>
                        <View style={styles.orderHeader}>
                            <Text style={styles.orderDate}>Order Date: {order.date}</Text>
                            <Text style={styles.totalAmount}>Total Amount: {order.total}</Text>
                        </View>
                        {order.items.map((item, itemIndex) => (
                            <View key={itemIndex} style={styles.itemContainer}>
                                <Image source={item.image} style={styles.itemImage} />
                                <View style={styles.itemDetails}>
                                    <Text style={styles.itemTitle}>{item.title}</Text>
                                    <Text style={styles.itemDescription}>{item.description}</Text>
                                    <Text style={styles.itemPrice}>{item.price}</Text>
                                </View>
                                <View style={styles.sizeContainer}>
                                    {item.sizes.map((size, sizeIndex) => (
                                        <View key={sizeIndex} style={styles.sizeRow}>
                                            <Text style={styles.sizeText}>{size.label}</Text>
                                            <Text style={styles.sizePrice}>{size.price}</Text>
                                            <Text style={styles.sizeQuantity}>X {size.quantity}</Text>
                                            <Text style={styles.sizeTotal}>{size.total}</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        ))}
                    </View>
                ))}
            </ScrollView>

            {/* Download Button */}
            <TouchableOpacity style={styles.downloadButton}>
                <Text style={styles.downloadButtonText}>Download</Text>
            </TouchableOpacity>
        </View>
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
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 60,
        marginBottom: 20,
    },
    headerText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
    orderCard: {
        backgroundColor: "#1e1e1e",
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
    },
    orderHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    orderDate: {
        fontSize: 14,
        color: "#fff",
    },
    totalAmount: {
        fontSize: 14,
        color: "#ff7f50",
    },
    itemContainer: {
        flexDirection: "row",
        marginBottom: 10,
    },
    itemImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
        marginRight: 10,
    },
    itemDetails: {
        flex: 1,
    },
    itemTitle: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
    },
    itemDescription: {
        fontSize: 14,
        color: "#aaa",
    },
    itemPrice: {
        fontSize: 16,
        color: "#ff7f50",
        marginTop: 5,
    },
    sizeContainer: {
        marginTop: 10,
    },
    sizeRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    },
    sizeText: {
        fontSize: 14,
        color: "#fff",
    },
    sizePrice: {
        fontSize: 14,
        color: "#fff",
    },
    sizeQuantity: {
        fontSize: 14,
        color: "#fff",
    },
    sizeTotal: {
        fontSize: 14,
        color: "#fff",
    },
    downloadButton: {
        backgroundColor: "#ff7f50",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20,
    },
    downloadButtonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
    },
});

export default OrderHistoryScreen;
