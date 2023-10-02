import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'


const Profile = () => {
    const userName = useSelector((state) => state?.credentials.name)
    const navigation = useNavigation()

    // useEffect(() => {
    //     dispatch()
    //     // setImmediate(() => { dispatch() })
    // }, [])

    // const dispatch = () => {
    //     navigation.dispatch(
    //         CommonActions.reset({
    //             index: 0,
    //             routes: [{ name: "Tab" }]
    //         })
    //     );
    //     console.log("done");
    // }

    const logout = async () => {
        await AsyncStorage.setItem("Login_In", JSON.stringify(false))
        navigation.navigate("Login")
    }

    return (
        <View style={styles.container}>
            <View style={styles.name}>
                <Image source={require('../resources/Images/profile.png')} />
                <Text style={[styles.txt, { color: "#DC7633", fontSize: 45 }]}>{userName}</Text>
            </View>
            <View style={styles.details}>
                <Text style={[styles.txt, { color: "#D98880" }]}>FULL NAME: IQRA GHANI</Text>
                <Text style={[styles.txt, { color: "#A9DFBF" }]} numberOfLines={1}>JOB DESCRIPTION: APPLICATIONS - ASSOCIATE ENGINEER</Text>
                <Text style={[styles.txt, { color: "#F1C40F" }]}>TEAM: MERN STACK</Text>
                <Text style={[styles.txt, { color: "#9B59B6" }]}>TEAM LEAD: ZUBAIR MAQBOOL</Text>
                <Text style={[styles.txt, { color: "#138D75" }]} numberOfLines={1}>COMPANY NAME: NEXT GENERATION INNOVATION</Text>
                <Text style={[styles.txt, { color: "#D35400" }]}>SHIFT TIMING: 10AM - 7PM</Text>
                <Text style={[styles.txt, { color: "#2874A6" }]}>SITTING AREA: HALL</Text>
                <TouchableOpacity style={{ borderWidth: 2, backgroundColor: "#FD410A", width: "30%", alignSelf: "center" }}
                    onPress={() => logout()}
                >
                    <Text style={[styles.txt, { color: "#2874A6" }]}>LOGOUT</Text>
                </TouchableOpacity>
            </View>
            <Image style={styles.heartImg} source={require('../resources/Images/heart.png')} />


        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EBEDEF"

    },
    name: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'flex-start'
    },
    details: {
        borderWidth: 3,
        height: "65%",
        width: "90%",
        alignSelf: "center",
        justifyContent: "space-evenly",
    },
    txt: {
        alignSelf: "center",
        fontSize: 18,
        fontWeight: "700"
    },
    heartImg: {
        width: "30%",
        height: "10%",
        bottom: 40,
        left: 310
    }
})
export default Profile;