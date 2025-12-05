import React from "react";
import {
    StyleSheet,
    ImageBackground,
    View,
    Text,
    TextInput,
    Button,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SignUp(props) {
    const navigation = useNavigation();

    const [focusName, setFocusName] = React.useState(false);
    const [focusEmail, setFocusEmail] = React.useState(false);
    const [focusPhone, setFocusPhone] = React.useState(false);
    const [focusPassword, setFocusPassword] = React.useState(false);


    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}   // FIXED
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }} // FIXED
                keyboardShouldPersistTaps="handled"
            >
                <ImageBackground
                    source={require('../assets/login.webp')}
                    style={styles.Background}
                    resizeMode="cover"
                >
                    <View style={styles.main}>
                        <Text style={styles.text}>SignUp screen</Text>

                        <View style={styles.container}>
                            <TextInput
                                style={[styles.textInput, focusName && styles.inputFocus]}
                                placeholder="Enter Your Name"
                                onFocus={() => setFocusName(true)}
                                onBlur={() => setFocusName(false)}
                            />
                            <TextInput
                                style={[styles.textInput, focusEmail && styles.inputFocus]}
                                placeholder="Enter Your E-mail"
                                onFocus={() => setFocusEmail(true)}
                                onBlur={() => setFocusEmail(false)}
                            />
                            <TextInput
                                style={[styles.textInput, focusPhone && styles.inputFocus]}
                                placeholder="Enter Your Phone"
                                onFocus={() => setFocusPhone(true)}
                                onBlur={() => setFocusPhone(false)}
                            />
                            <TextInput
                                style={[styles.textInput, focusPassword && styles.inputFocus]}
                                secureTextEntry
                                placeholder="Enter Your Password"
                                onFocus={() => setFocusPassword(true)}
                                onBlur={() => setFocusPassword(false)}
                            />

                            <Button title="Sign Up" onPress={() => navigation.navigate("Login")} />
                        </View>
                        <View style={styles.loginRow}>
                                            <Text style={{  fontSize: 16 }}>Already have an account? </Text>
                        
                                            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                                                <Text style={{ color: "#4e8cff", fontWeight: "bold", fontSize: 16 }}>
                                                    Login
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    Background: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        paddingVertical: 40 // helps for scroll spacing
    },
    text: {
        color: "#ccc",
        fontSize: 35,
        fontWeight: "bold",
        textShadowColor: "black",
        textShadowOffset: { height: 2, width: 2 },
        textShadowRadius: 5
    },
    container: {
        width: "70%",
        gap: 15
    },
    textInput: {
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 15,
        padding: 12,
        fontSize: 16,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    inputFocus: {
        borderColor: "#0019f8ff",
        borderWidth: 2,
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 8
    },
    loginRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10
    }
});
