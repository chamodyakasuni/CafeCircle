import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen'; // Adjust the path as necessary
import ProfileScreen from './screens/LoginScreen'; // Adjust the path as necessary
import CoffeeDetailsScreen from './screens/CoffeeDetailsScreen'; // Adjust the path as necessary
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from './screens/CartScreen';
import WelcomePage from './screens/WelcomePage';
import PaymentScreen from './screens/PaymentScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <FavoritesScreen />
        </NavigationContainer>
     );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        justifyContent: 'center',
    },
});

// const StackNav: React.FC = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="Home" component={HomeScreen} />
//             <Stack.Screen name="Profile" component={ProfileScreen} />
//             <Stack.Screen name="CoffeeDetails" component={CoffeeDetailsScreen} />
//         </Stack.Navigator>
//     );
// };

// const App: React.FC = () => {
//     const [fontsLoaded, setFontsLoaded] = useState(false);

//     useEffect(() => {
//         async function loadFonts() {
//             await Font.loadAsync({
//                 'Caveat-VariableFont_wght': require('./assets/fonts/Caveat-VariableFont_wght.ttf'), // Adjust the path based on your file structure
//             });
//             setFontsLoaded(true);
//         }
//         loadFonts();
//     }, []);

//     if (!fontsLoaded) {
//         return <AppLoading />;
//     }

//     return (
//         <NavigationContainer>
//             <Drawer.Navigator initialRouteName="Home">
//                 <Drawer.Screen name="Home" component={StackNav} />
//                 <Drawer.Screen name="Profile" component={ProfileScreen} />
//             </Drawer.Navigator>
//         </NavigationContainer>
//     );
// };

//expo'',

// const StackNav: React.FC = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="Home" component={HomeScreen} />
//             <Stack.Screen name="Profile" component={ProfileScreen} />
//             <Stack.Screen name="CoffeeDetails" component={CoffeeDetailsScreen} />
//         </Stack.Navigator>
//     );
// };

// const App: React.FC = () => {
//     const [fontsLoaded, setFontsLoaded] = useState(false);

//     useEffect(() => {
//         async function loadFonts() {
//             await Font.loadAsync({
//                 'Caveat-VariableFont_wght': require('./assets/fonts/Caveat-VariableFont_wght.ttf'), // Adjust the path based on your file structure
//             });
//             setFontsLoaded(true);
//         }
//         loadFonts();
//     }, []);

//     if (!fontsLoaded) {
//         return <AppLoading />;
//     }

//     return (
//         <NavigationContainer>
//             <Drawer.Navigator initialRouteName="Home">
//                 <Drawer.Screen name="Home" component={StackNav} />
//                 <Drawer.Screen name="Profile" component={ProfileScreen} />
//             </Drawer.Navigator>
//         </NavigationContainer>
//     );
// };

//export default App;
