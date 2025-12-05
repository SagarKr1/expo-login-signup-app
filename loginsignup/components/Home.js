import React from "react";
import { StyleSheet,View,Text,ImageBackground } from "react-native";

export default function Home(){
    return (
        <ImageBackground
        source={require('../assets/img0.avif')}
        resizeMode="cover"
        style={styles.background}
        >
            <View style={styles.main}>
                <Text>
                    Home Screen
                </Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        height:"100%",
        width:"100%"
    },
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})