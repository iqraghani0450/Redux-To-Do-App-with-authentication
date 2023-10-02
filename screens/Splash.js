import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'



const Splash = () => {
    const navigation = useNavigation()


    useEffect(() => {
        setTimeout(navigateTo, 2000)
        //navigateTo()
    }, [])


    const navigateTo = async () => {
        let isLoggedIn = await AsyncStorage.getItem('Login_In')
        
        isLoggedIn = JSON.parse(isLoggedIn)
        console.log(isLoggedIn,'see login status in splash')
        
        if (isLoggedIn ) {
           navigation.navigate("Tab") 
        }
        else {
            navigation.navigate("Login") 
            
        }
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.birdImg} source={require('../resources/Images/bird.png')}
            />
            <Text style={styles.txt}>APPeeeeee</Text>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EBEDEF",
        justifyContent: "center",
        alignItems: "center"
    },
    txt: {
        fontSize: 36,
        textAlign: "center",
        color: "black",
        fontWeight: "600",
        fontFamily: "serif"
    },
    birdImg: {
        height: "30%",
        width: "100%",
    }
})
export default Splash;