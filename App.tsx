import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import TabNavigator from './navigators/TabNavigator';
import CoffeeDetailsScreen from './screens/CoffeeDetailsScreen';
import PaymentScreen from './screens/PaymentScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="Tab"
                    component={TabNavigator}
                    options={{ animation: "slide_from_bottom" }}>
                </Stack.Screen>
                <Stack.Screen 
                name="Details" 
                component={CoffeeDetailsScreen} 
                options={{animation: "slide_from_bottom"}}>
                </Stack.Screen>
                <Stack.Screen
                    name="Payment"
                    component={PaymentScreen}
                    options={{ animation: "slide_from_bottom" }}>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;

const styles = StyleSheet.create({});