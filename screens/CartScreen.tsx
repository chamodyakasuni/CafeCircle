<<<<<<< HEAD
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartScreen = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: '1',
            name: 'Cappuccino',
            description: 'With Steamed Milk',
            size: 'M',
            price: 6.20,
            quantity: 1,
            image: require('../assets/coffee/cappuccino_pic_1_square.png'),
        },
        {
            id: '2',
            name: 'Robusta Beans',
            description: 'Medium Roasted',
            size: '355gm',
            price: 6.20,
            quantity: 1,
            image: require('../assets/beans/robusta_coffee_beans_square.png'),
        },
        {
            id: '3',
            name: 'Liberica Coffee Beans',
            description: 'With Steamed Milk',
            size: '500gm',
            price: 4.20,
            quantity: 1,
            image: require('../assets/beans/liberica_coffee_beans_square.png'),
        },
    ]);

    interface CartItem {
        id: string;
        name: string;
        description: string;
        size: string;
        price: number;
        quantity: number;
        image: any; // You can replace 'any' with the specific type if you know it
    }

    const handleQuantityChange = (id: string, change: number): void => {
        const updatedCart = cartItems.map((item: CartItem) => {
            if (item.id === id) {
                const newQuantity = Math.max(1, item.quantity + change); // Prevent quantity from going below 1
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCartItems(updatedCart);
    };

    const calculateTotalPrice = () =>
        cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Cart</Text>
                <TouchableOpacity>
                    <Ionicons name="person-circle" size={30} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Cart Items */}
            <ScrollView style={styles.cartList}>
                {cartItems.map((item) => (
                    <View key={item.id} style={styles.cartItem}>
                        <Image source={item.image} style={styles.productImage} />
                        <View style={styles.productInfo}>
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text style={styles.productDescription}>{item.description}</Text>
                            <Text style={styles.productSize}>Size: {item.size}</Text>
                            <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
                        </View>
                        {/* Quantity Controls */}
                        <View style={styles.quantityControls}>
                            <TouchableOpacity
                                onPress={() => handleQuantityChange(item.id, -1)}
                                style={styles.quantityButton}
                            >
                                <Ionicons name="remove" size={16} color="#fff" />
                            </TouchableOpacity>
                            <Text style={styles.quantityText}>{item.quantity}</Text>
                            <TouchableOpacity
                                onPress={() => handleQuantityChange(item.id, 1)}
                                style={styles.quantityButton}
                            >
                                <Ionicons name="add" size={16} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.totalPrice}>Total Price: ${calculateTotalPrice()}</Text>
                <TouchableOpacity style={styles.payButton}>
                    <Text style={styles.payButtonText}>Pay</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
        paddingHorizontal: 16,
        paddingTop: 50,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
    },
    cartList: {
        flex: 1,
    },
    cartItem: {
        flexDirection: 'row',
        backgroundColor: '#262B33',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        alignItems: 'center',
    },
    productImage: {
        width: 60,
        height: 60,
        borderRadius: 6,
    },
    productInfo: {
        flex: 1,
        marginLeft: 12,
    },
    productName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    productDescription: {
        fontSize: 12,
        color: '#aaa',
    },
    productSize: {
        fontSize: 12,
        color: '#fff',
    },
    productPrice: {
        fontSize: 14,
        color: '#d17842',
        marginTop: 4,
    },
    quantityControls: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        backgroundColor: '#d17842',
        borderRadius: 16,
        padding: 4,
    },
    quantityText: {
        color: '#fff',
        marginHorizontal: 8,
        fontSize: 14,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#333',
    },
    totalPrice: {
        fontSize: 16,
        color: '#fff',
    },
    payButton: {
        backgroundColor: '#d17842',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    payButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CartScreen;
=======
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartScreen = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: '1',
            name: 'Cappuccino',
            description: 'With Steamed Milk',
            size: 'M',
            price: 6.20,
            quantity: 1,
            image: require('../assets/coffee/cappuccino_pic_1_square.png'),
        },
        {
            id: '2',
            name: 'Robusta Beans',
            description: 'Medium Roasted',
            size: '355gm',
            price: 6.20,
            quantity: 1,
            image: require('../assets/beans/robusta_coffee_beans_square.png'),
        },
        {
            id: '3',
            name: 'Liberica Coffee Beans',
            description: 'With Steamed Milk',
            size: '500gm',
            price: 4.20,
            quantity: 1,
            image: require('../assets/beans/liberica_coffee_beans_square.png'),
        },
    ]);

    interface CartItem {
        id: string;
        name: string;
        description: string;
        size: string;
        price: number;
        quantity: number;
        image: any; // You can replace 'any' with the specific type if you know it
    }

    const handleQuantityChange = (id: string, change: number): void => {
        const updatedCart = cartItems.map((item: CartItem) => {
            if (item.id === id) {
                const newQuantity = Math.max(1, item.quantity + change); // Prevent quantity from going below 1
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCartItems(updatedCart);
    };

    const calculateTotalPrice = () =>
        cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Cart</Text>
                <TouchableOpacity>
                    <Ionicons name="person-circle" size={30} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Cart Items */}
            <ScrollView style={styles.cartList}>
                {cartItems.map((item) => (
                    <View key={item.id} style={styles.cartItem}>
                        <Image source={item.image} style={styles.productImage} />
                        <View style={styles.productInfo}>
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text style={styles.productDescription}>{item.description}</Text>
                            <Text style={styles.productSize}>Size: {item.size}</Text>
                            <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
                        </View>
                        {/* Quantity Controls */}
                        <View style={styles.quantityControls}>
                            <TouchableOpacity
                                onPress={() => handleQuantityChange(item.id, -1)}
                                style={styles.quantityButton}
                            >
                                <Ionicons name="remove" size={16} color="#fff" />
                            </TouchableOpacity>
                            <Text style={styles.quantityText}>{item.quantity}</Text>
                            <TouchableOpacity
                                onPress={() => handleQuantityChange(item.id, 1)}
                                style={styles.quantityButton}
                            >
                                <Ionicons name="add" size={16} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.totalPrice}>Total Price: ${calculateTotalPrice()}</Text>
                <TouchableOpacity style={styles.payButton}>
                    <Text style={styles.payButtonText}>Pay</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
        paddingHorizontal: 16,
        paddingTop: 50,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
    },
    cartList: {
        flex: 1,
    },
    cartItem: {
        flexDirection: 'row',
        backgroundColor: '#262B33',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        alignItems: 'center',
    },
    productImage: {
        width: 60,
        height: 60,
        borderRadius: 6,
    },
    productInfo: {
        flex: 1,
        marginLeft: 12,
    },
    productName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    productDescription: {
        fontSize: 12,
        color: '#aaa',
    },
    productSize: {
        fontSize: 12,
        color: '#fff',
    },
    productPrice: {
        fontSize: 14,
        color: '#d17842',
        marginTop: 4,
    },
    quantityControls: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        backgroundColor: '#d17842',
        borderRadius: 16,
        padding: 4,
    },
    quantityText: {
        color: '#fff',
        marginHorizontal: 8,
        fontSize: 14,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#333',
    },
    totalPrice: {
        fontSize: 16,
        color: '#fff',
    },
    payButton: {
        backgroundColor: '#d17842',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    payButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CartScreen;
>>>>>>> 35ecdba9971ef803182f013598d8bf086991b657
