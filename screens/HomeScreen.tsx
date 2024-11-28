import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, DrawerActions } from '@react-navigation/native';


const data = [
    { id: '1', name: 'Americano', price: '$4.20', image: require('../assets/coffee/americano_pic_2_square.png'), rating: 4.2, description: 'With Foam' },
    { id: '2', name: 'Cappuccino', price: '$4.20', image: require('../assets/coffee/cappuccino_pic_1_square.png'), rating: 4.5, description: 'With Steamed Milk' },
    { id: '3', name: 'Espresso', price: '$4.20', image: require('../assets/coffee/espresso_pic_3_square.png'), rating: 4.2, description: 'With Foam' },
    { id: '4', name: 'Black Coffee', price: '$4.20', image: require('../assets/coffee/black_coffee_pic_3_square.png'), rating: 4.5, description: 'With Steamed Milk' },
    { id: '5', name: 'Latte', price: '$4.20', image: require('../assets/coffee/latte_pic_3_square.png'), rating: 4.2, description: 'With Foam' },
    { id: '6', name: 'Macchiato', price: '$4.20', image: require('../assets/coffee/macchiato_pic_2_square.png'), rating: 4.5, description: 'With Steamed Milk' },
];

const coffeeBeans = [
    { id: '1b', name: 'Arabica Coffee Beans', price: '$4.20', image: require('../assets/beans/arabica_coffee_beans_square.png'), description: 'Medium Roast' },
    { id: '2b', name: 'Excelsa Coffee Beans', price: '$4.20', image: require('../assets/beans/excelsa_coffee_beans_square.png'), description: 'With Steamed Milk' },
    { id: '3b', name: 'Liberica Coffee Beans', price: '$4.20', image: require('../assets/beans/liberica_coffee_beans_square.png'), description: 'Medium Roast' },
    { id: '4b', name: 'Robusta Coffee Beans', price: '$4.20', image: require('../assets/beans/robusta_coffee_beans_square.png'), description: 'With Steamed Milk' },
];

const HomeScreen: React.FC = () => {
    const navigation = useNavigation();

    const renderCard = (item: any) => (
        <TouchableOpacity
            key={item.id}
            onPress={() => {
                if (item.id === '4b') {
                    navigation.navigate('CoffeeDetails');
                }
            }}
        >
            <LinearGradient
                colors={['#465162', '#262B33']}
                style={styles.card}
            >
                <Image source={typeof item.image === 'string' ? { uri: item.image } : item.image} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
                <Text style={styles.cardPrice}>{item.price}</Text>
                <TouchableOpacity style={styles.addButton}>
                    <Ionicons name="add" size={16} color="#fff" />
                </TouchableOpacity>
            </LinearGradient>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.navBar}>
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Ionicons name="menu" size={26} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.navBarText}>Coffee For You <Ionicons name='cafe-outline' size={18} color="#fff" /></Text>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Ionicons name="person-circle" size={30} color="#fff" />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Find the best{'\n'}coffee for you</Text>
                    <View style={styles.searchContainer}>
                        <Ionicons name="search" size={20} color="#ccc" />
                        <TextInput placeholder="Find Your Coffee..." style={styles.searchInput} placeholderTextColor="#ccc" />
                    </View>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.tabContainer}>
                    <Text style={styles.tabText}>All</Text>
                    <Text style={styles.tabText}>Cappuccino</Text>
                    <Text style={styles.tabText}>Espresso</Text>
                    <Text style={styles.tabText}>Americano</Text>
                    <Text style={styles.tabText}>Macchiato</Text>
                    <Text style={styles.tabText}>Latte</Text>
                    <Text style={styles.tabText}>Bean</Text>
                </ScrollView>

                <Text style={styles.subHeader}>Top Coffees</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    {data.map((item) => renderCard(item))}
                </ScrollView>

                <Text style={styles.subHeader}>Coffee Beans</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    {coffeeBeans.map((item) => renderCard(item))}
                </ScrollView>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerTab}>
                    <Ionicons name="home" size={24} color="#fff" />
                    <Text style={styles.footerTabText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerTab}>
                    <Ionicons name="heart" size={24} color="#fff" />
                    <Text style={styles.footerTabText}>Favorites</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerTab}>
                    <Ionicons name="cart" size={24} color="#fff" />
                    <Text style={styles.footerTabText}>Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerTab}>
                    <Ionicons name="notifications" size={24} color="#fff" />
                    <Text style={styles.footerTabText}>Notification</Text>
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
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333',
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginTop: 30,
    },
    navBarText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Caveat-VariableFont_wght',
    },
    header: {
        marginBottom: 8,
        padding: 20,
    },
    sidebarIcon: {
        marginRight: 20,
        marginTop: 80,
    },
    headerText: {
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 35,
        marginLeft: 10,
        fontFamily: 'Caveat-VariableFont_wght',
        marginBottom: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#262B33',
        borderRadius: 28,
        marginTop: 20,
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        color: '#fff',
    },
    tabContainer: {
        flexDirection: 'row',
        marginVertical: 17,
        marginTop: 20,
    },
    tabText: {
        color: '#fff',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 16,
        backgroundColor: '#333',
        marginRight: 8,
    },
    subHeader: {
        fontSize: 20,
        color: '#fff',
        marginVertical: 10,
    },
    horizontalScroll: {
        marginVertical: 10,
    },
    card: {
        backgroundColor: 'rgba(70, 81, 97, 0.45)',
        borderRadius: 12,
        padding: 8,
        marginRight: 16,
        width: 150,
        height: 280,
    },
    cardImage: {
        width: '100%',
        height: 180,
        borderRadius: 6,
    },
    cardTitle: {
        fontSize: 16,
        color: '#fff',
        marginVertical: 4,
    },
    cardDescription: {
        fontSize: 12,
        color: '#aaa',
    },
    cardPrice: {
        fontSize: 14,
        color: '#fff',
        marginVertical: 4,
    },
    addButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: '#d17842',
        borderRadius: 16,
        padding: 4,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#1E1E1E',
        paddingVertical: 10,
    },
    footerTab: {
        alignItems: 'center',
    },
    footerTabText: {
        color: '#fff',
        fontSize: 12,
        marginTop: 4,
    },
    activeTab: {
        backgroundColor: '#d17842',
        borderRadius: 16,
        padding: 8,
    },
});

export default HomeScreen;
