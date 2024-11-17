import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { AuthStackParamList } from '../navigation/types'; 

const { width, height } = Dimensions.get("window");

const LoginScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

    return (
        <View style={styles.container}>
            
            <ImageBackground
                source={require('../assets/coffee/background.png')} // Corrected the syntax and path
                style={styles.imageBackground}
                resizeMode="cover"
            >
                {/* Welcome Text */}
                <View style={styles.textContainer}>
                    <Text style={styles.welcomeText}>Welcome To</Text>
                    <Text style={styles.brandText}>CafeCircle</Text>
                </View>
            </ImageBackground>

            
            <View style={styles.bottomSection}>
                
                <View style={styles.tabSwitcher}>
                    <Text style={[styles.tabText, styles.activeTab]}>Sign In</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.tabText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                
                <View style={styles.inputContainer}>
                    <View style={styles.inputWrapper}>
                        <Ionicons name="mail-outline" size={20} color="#6e6e6e" style={styles.icon} />
                        <TextInput placeholder="Email Address" placeholderTextColor="#ccc" style={styles.input} />
                    </View>
                    <View style={styles.inputWrapper}>
                        <Ionicons name="lock-closed-outline" size={20} color="#6e6e6e" style={styles.icon} />
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="#ccc"
                            style={styles.input}
                            secureTextEntry
                        />
                    </View>
                </View>

                
                <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.signInButtonText}>Sign In</Text>
                </TouchableOpacity>

                
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1E1E1E",
    },
    imageBackground: {
        width: width,
        height: height * 0.4,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
    },
    welcomeText: {
        fontSize: width * 0.08,
        color: "#fff",
        fontWeight: "300",
        marginBottom: 10,
    },
    brandText: {
        fontSize: width * 0.1,
        color: "#fff",
        fontWeight: "700",
        fontFamily: "serif",
    },
    bottomSection: {
        flex: 1,
        backgroundColor: "#d17842",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingHorizontal: width * 0.06,
        paddingTop: height * 0.03,
    },
    tabSwitcher: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: height * 0.02,
    },
    tabText: {
        fontSize: width * 0.05,
        color: "#fff",
    },
    activeTab: {
        textDecorationLine: "underline",
        fontWeight: "bold",
    },
    inputContainer: {
        marginBottom: height * 0.03,
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingHorizontal: width * 0.03,
        marginBottom: height * 0.015,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    icon: {
        marginRight: width * 0.02,
    },
    input: {
        flex: 1,
        height: height * 0.07,
        color: "#000",
    },
    signInButton: {
        backgroundColor: "#000",
        paddingVertical: height * 0.02,
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    signInButtonText: {
        color: "#fff",
        fontSize: width * 0.045,
        fontWeight: "bold",
    },
    forgotPassword: {
        textAlign: "center",
        color: "#fff",
        marginTop: height * 0.02,
        textDecorationLine: "underline",
    },
});
