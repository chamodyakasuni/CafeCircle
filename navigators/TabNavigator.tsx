import React from 'react'
import { StyleSheet } from 'react-native'
import { BlurView } from 'expo-blur';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import { COLORS } from '../theme/theme'; 
import { Ionicons } from '@expo/vector-icons'; // Add this import for Ionicons

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
      <Tab.Navigator
          screenOptions={{ 
            headerShown: false, 
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBarStyle,
            tabBarBackground:() => (
                <BlurView   
                    intensity={100}
                    style={styles.BlurViewStyles} 
                />
            ),
          }}>
          <Tab.Screen
              name="Home"
              component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name="home" // Ensure this is a valid icon name
                            size={25}
                            color={focused ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex}
                        />
                    ),
                }}
          />
          <Tab.Screen
              name="Cart"
              component={CartScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name="cart" // Ensure this is a valid icon name
                            size={25}
                            color={focused ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex}
                        />
                    ),
                }}
              
          />
          <Tab.Screen
              name="Favorites"
              component={FavoritesScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name="heart" // Ensure this is a valid icon name
                            size={25}
                            color={focused ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex}
                        />
                    ),
                }}
              
        />
        <Tab.Screen
            name="OrderHistory"
              component={OrderHistoryScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name="notifications"
                            size={25}
                            color={focused ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex}
                        />
                    ),
                }}
              
          />
      </Tab.Navigator>
    );
};  
  
const styles = StyleSheet.create({
  
      tabBarStyle: {
          height: 80,
          position: 'absolute',
          backgroundColor: COLORS.primaryBlackRGBA,
          borderTopWidth: 0,
          borderTopColor: 'transparent',
      },

        BlurViewStyles: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            
        }
});

export default TabNavigator;