import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'


const Login = () => {
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    const navigation = useNavigation()
    const userNameSlice = useSelector((state) => state.credentials)
    
    const _resetToTab = async () => {
        await AsyncStorage.setItem("Login_In", JSON.stringify(true))
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: "Tab" }]
            })
        );
        console.log("done");
    }
    return (
        <View style={styles.container}>
            <View style={styles.firstContainer}>
                <Text style={styles.signIn}>SIGN IN</Text>
                <Image
                    style={styles.birdImg} source={require('../resources/Images/bird.png')}
                />
            </View>
            <View style={styles.subContainer}>
                <TextInput
                    style={[styles.inputField, { backgroundColor: "#F7DC6F", top: 15 }]}
                    placeholder={'Username'}
                    placeholderTextColor={"black"}
                    onChangeText={txt => { setUserName(txt) }}
                    value={userName}
                />
                <TextInput
                    style={[styles.inputField, { backgroundColor: "#AED6F1" }]}
                    placeholder={'Password'}
                    placeholderTextColor={"black"}
                    secureTextEntry={true}
                    onChangeText={txt => { setPassword(txt) }}
                    value={password}
                />
                <TouchableOpacity style={styles.button} onPress={() => {
                    if (userName == userNameSlice.name && password == userNameSlice.password) {
                       // navigation.navigate("Tab")
                       _resetToTab()
                        setPassword("")
                        setUserName("")
                    }
                    else {
                        alert("Wrong username or password")
                    }
                }}>
                    <Image style={styles.mailImg} source={require('../resources/Images/messengerIcon.png')} />
                </TouchableOpacity>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EBEDEF",
        justifyContent: "center"
    },
    firstContainer: {
        flexDirection: "row",
        height: "20%",
        justifyContent: "center",
        alignItems: "center",
        bottom: 50
    },
    signIn: {
        fontSize: 36,
        textAlign: "center",
        color: "black",
        fontWeight: "600",
        fontFamily: "serif"
    },
    subContainer: {
        backgroundColor: "#EBEDEF",
        height: "40%",
        alignItems: "center",
        justifyContent: "space-between"
    },
    inputField: {
        borderColor: "black",
        borderRadius: 5,
        width: "80%",
        height: "25%",
        borderWidth: 2,
        color: "black",
        fontSize: 20,
        paddingHorizontal: 30
    },
    button: {
        backgroundColor: "#FADBD8",
        height: "18%",
        width: "40%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "black",
    },
    mailImg: {
        height: "90%",
        width: "30%"
    },
    birdImg: {
        height: "100%",
        width: "40%",
    }
})
export default Login;