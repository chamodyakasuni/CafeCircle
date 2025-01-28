import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const CoffeeDetailsScreen = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="heart-outline" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Product Image */}
            <Image
                source={require('../assets/beans/robusta_coffee_beans_square.png')}
                style={styles.productImage}
            />



            {/* Product Info */}
            <View style={styles.productInfo}>
                <Text style={styles.productName}>Robusta Beans</Text>
                <Text style={styles.productOrigin}>From Africa</Text>
                <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={16} color="#FFD700" />
                    <Text style={styles.ratingText}>4.5</Text>
                    <Text style={styles.ratingCount}>(6,879)</Text>
                </View>
                <View style={styles.tagsContainer}>
                    <Text style={styles.tag}>Bean</Text>
                    <Text style={styles.tag}>Africa</Text>
                    <Text style={styles.tag}>Medium Roasted</Text>
                </View>
            </View>

            {/* Description */}
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>
                Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world's coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia and may even be the first coffee beans ever consumed!
            </Text>

            {/* Size Options */}
            <View style={styles.sizeContainer}>
                <TouchableOpacity style={styles.sizeButton}>
                    <Text style={styles.sizeText}>250g</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sizeButton}>
                    <Text style={styles.sizeText}>500g</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sizeButton}>
                    <Text style={styles.sizeText}>1000g</Text>
                </TouchableOpacity>
            </View>

            {/* Price and Add to Cart */}
            <View style={styles.footer}>
                <Text style={styles.price}>$10.50</Text>
                <TouchableOpacity style={styles.addToCartButton}>
                    <Text style={styles.addToCartText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
    },
    iconButton: {
        backgroundColor: '#333',
        padding: 10,
        borderRadius: 8,
    },
    productImage: {
        width: '100%',
        height: 350,
        borderRadius: 12,
        marginVertical: 20,
    },
    
    productInfo: {
        marginVertical: 0.5,
    },
    productName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    productOrigin: {
        fontSize: 16,
        color: '#aaa',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    ratingText: {
        fontSize: 16,
        color: '#fff',
        marginLeft: 4,
    },
    ratingCount: {
        fontSize: 14,
        color: '#aaa',
        marginLeft: 4,
    },
    tagsContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    tag: {
        backgroundColor: '#333',
        color: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 16,
        marginRight: 8,
        fontSize: 12,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginVertical: 10,
    },
    description: {
        fontSize: 14,
        color: '#aaa',
        lineHeight: 20,
    },
    sizeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    sizeButton: {
        backgroundColor: '#333',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    sizeText: {
        color: '#fff',
        fontSize: 14,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    addToCartButton: {
        backgroundColor: '#d17842',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    addToCartText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default CoffeeDetailsScreen;