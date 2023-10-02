import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useSelector } from "react-redux";


const SinglePost = (props) => {
    const position = props.route.params
    const posts = useSelector(state => state?.posts)
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Image source={require('../resources/Images/doggo.png')} />
                <Text style={styles.headerTxt}>
                    <Text style={styles.bold}>
                        ID:
                    </Text>
                    {posts[position].id}
                </Text>
            </View>
            <View style={styles.bodyView}>

                <Text style={styles.margin}>
                    <Text style={styles.bold}>
                        USER ID:
                    </Text>
                    {posts[position].userId}
                </Text>
                <Text style={styles.margin}>
                    <Text style={styles.bold}>
                        TITLE:
                    </Text>
                    {posts[position].title}
                </Text>
                <Text style={styles.margin}>
                    <Text style={styles.bold}>
                        BODY:
                    </Text>
                    {posts[position].body}
                </Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EBEDEF",
        flex: 1,
        justifyContent: "center"
    },
    headerView: {
        flexDirection: "row",
        alignItems: "center"
    },
    headerTxt: {
        color: "#646D24",
        fontSize: 45
    },
    bodyView: {
        backgroundColor: "#EEF5BB",
        height: "70%",
        width: "90%",
        alignSelf: "center",
        justifyContent: "center",
        borderWidth: 2
    },
    bold: {
        fontWeight: "bold"
    },
    margin: {
        margin: 10
    }

})


export default SinglePost;
