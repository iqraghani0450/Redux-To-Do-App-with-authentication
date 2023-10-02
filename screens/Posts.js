import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from "react-native";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../redux/actions/Post";
import { useNavigation } from "@react-navigation/native";

const Posts = () => {
    const posts = useSelector(state => state?.posts)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    console.log("in screen posts", posts);

    useEffect(() => {
        callAPI()
    }, [])
    const callAPI = () => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                dispatch(getPosts(res.data))
            })
            .catch(err => {
                console.log(err);
                alert(err)
            })
    }


    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={[styles.postItems,
            {
                backgroundColor:
                    index % 3 ? "#AED6F1" : index % 2 ? "#F9E79F" : "#D7BDE2"
            }]}
                onPress={() => navigation.navigate("SinglePost", index)}
            >
                <Text>
                    <Text style={{ fontWeight: "bold" }}>
                        ID:
                    </Text>
                    {item.id}</Text>
                <Text numberOfLines={1}>
                    <Text style={{ fontWeight: "bold" }}>
                        TITLE:
                    </Text>
                    {item.title}</Text>
                <Text numberOfLines={1}>
                    <Text style={{ fontWeight: "bold" }}>
                        BODY:
                    </Text>
                    {item.body}</Text>
            </TouchableOpacity >
        )
    }

    return (
        <View style={{ backgroundColor: "#EBEDEF", paddingBottom:50 }}>
            <View style={styles.row}>
                <Text style={styles.txt}>RAINBOW TEXT</Text>
                <Image
                    style={styles.rainbowImg} source={require('../resources/Images/rainbow.png')}
                />
            </View>

            <FlatList
                data={posts}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        height: "20%",
        alignItems: "center",
        justifyContent: "space-around"
    },
    txt: {
        fontSize: 22,
        fontWeight: "900",
        color: "#C39BD3",
        fontFamily: "serif",
        textDecorationLine: "underline line-through",

    },
    rainbowImg: {
        height: "100%",
        width: "45%"
    },
    postItems: {
        backgroundColor: "pink",
        margin: 10,
        borderWidth: 3,
        borderRadius: 10,
        backgroundColor: "#F5B7B1"
    }
})

export default Posts;