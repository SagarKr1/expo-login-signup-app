import React from "react";
import { StyleSheet, View, Text, ImageBackground, TextInput, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Login(props) {
    const navigation = useNavigation();

    const [emailFocus, setEmailFocus] = React.useState(false);
    const [passFocus, setPassFocus] = React.useState(false);
    const [validate, setValidate] = React.useState(false);

    return (
        <ImageBackground
            source={require('../assets/blue.avif')}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <View style={styles.main}>
                <Text style={styles.text}>Login Screen</Text>

                <View style={styles.container}>
                    <TextInput
                        style={[styles.input, emailFocus && styles.inputFocus]}
                        placeholder="Enter your Email"
                        placeholderTextColor="#666"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                    />

                    <TextInput
                        style={[styles.input, passFocus && styles.inputFocus]}
                        placeholder="Enter your Password"
                        placeholderTextColor="#666"
                        secureTextEntry
                        onFocus={() => setPassFocus(true)}
                        onBlur={() => setPassFocus(false)}
                    />

                    {validate ? (
                        <Text style={styles.valText}>email or password is incorrect</Text>
                    ) : (
                        <Text style={styles.valText}></Text>
                    )}

                    <Button title="Login" onPress={() => navigation.navigate("Home")} />
                </View>

                {/* 🔥 Fixed Section */}
                <View style={styles.signupRow}>
                    <Text style={{ fontSize: 16 }}>Don't have an account? </Text>

                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                        <Text style={{ color: "#4e8cff", fontWeight: "bold", fontSize: 16 }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    },
    text: {
        color: "white",
        fontSize: 32,
        fontWeight: "bold",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5
    },
    container: {
        width: "70%",
        gap: 15
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        color:"black",
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 20,
        fontSize: 16,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    inputFocus: {
        borderColor: "#4e8cff",
        borderWidth: 2,
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 8
    },
    valText: {
        color: "red",
        height: 20
    },
    signupRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10
    }
});
