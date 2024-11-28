import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons, FontAwesome, Entypo } from "@expo/vector-icons";

const FavoritesScreen = () => {
    const favorites = [
        {
            image: require("../assets/coffee/cappuccino_pic_1_square.png"), // Replace with your asset path
            title: "Cappuccino",
            subtitle: "With Steamed Milk",
            rating: "4.5",
            reviews: "6,879",
            tags: ["Coffee", "Milk"],
            roast: "Medium Roasted",
            description:
                "Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.",
        },
    ];

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <MaterialIcons name="menu" size={24} color="#fff" />
                <Text style={styles.headerText}>Favorites</Text>
                <FontAwesome name="user-circle" size={24} color="#fff" />
            </View>

            {/* Favorite Items */}
            <ScrollView showsVerticalScrollIndicator={false}>
                {favorites.map((item, index) => (
                    <View key={index} style={styles.card}>
                        <Image source={item.image} style={styles.cardImage} />
                        <TouchableOpacity style={styles.favoriteIcon}>
                            <Entypo name="heart" size={24} color="#ff7f50" />
                        </TouchableOpacity>
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            <Text style={styles.cardSubtitle}>{item.subtitle}</Text>

                            <View style={styles.ratingContainer}>
                                <FontAwesome name="star" size={16} color="#ff7f50" />
                                <Text style={styles.ratingText}>
                                    {item.rating} <Text style={styles.reviewText}>({item.reviews})</Text>
                                </Text>
                            </View>

                            <View style={styles.tagsContainer}>
                                {item.tags.map((tag, tagIndex) => (
                                    <View key={tagIndex} style={styles.tag}>
                                        <Text style={styles.tagText}>{tag}</Text>
                                    </View>
                                ))}
                                <View style={styles.roastTag}>

                                    <Text style={styles.roastText}>{item.roast}</Text>
                                </View>
                            </View>

                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
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
    card: {
        backgroundColor: "#1e1e1e",
        borderRadius: 12,
        overflow: "hidden",
        marginBottom: 20,
    },
    cardImage: {
        width: "100%",
        height: 200,
    },
    favoriteIcon: {
        position: "absolute",
        top: 10,
        right: 10,
        backgroundColor: "#00000090",
        padding: 8,
        borderRadius: 50,
    },
    cardContent: {
        padding: 16,
    },
    cardTitle: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
    cardSubtitle: {
        fontSize: 14,
        color: "#aaa",
        marginBottom: 10,
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    ratingText: {
        fontSize: 14,
        color: "#fff",
        marginLeft: 5,
    },
    reviewText: {
        fontSize: 12,
        color: "#aaa",
    },
    tagsContainer: {
        flexDirection: "row",
        marginBottom: 10,
    },
    tag: {
        backgroundColor: "#2c2c2c",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 5,
    },
    tagText: {
        fontSize: 12,
        color: "#ff7f50",
    },
    roastTag: {
        backgroundColor: "#ff7f50",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    roastText: {
        fontSize: 12,
        color: "#fff",
    },
    description: {
        fontSize: 14,
        color: "#aaa",
    },
});

export default FavoritesScreen;
