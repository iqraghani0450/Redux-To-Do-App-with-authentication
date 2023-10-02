import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Todo = () => {
    const [data, setData] = useState([])
    const [newItem, setNewItem] = useState()
    const [icon, setIcon] = useState("plus")
    const [editIndex, setEditIndex] = useState()

    const deleteItem = (index) => {
        {
            Alert.alert('DELETE ITEM', 'Do you want to delete this item from your todo list?', [
                {
                    text: 'No',
                    onPress: () => console.log('Cancel Pressed'),
                },
                {
                    text: 'Yes', onPress: () => {
                        data.splice(index, 1)
                        setData([...data])
                        console.log("data: ", data);
                    }
                },
            ]);
        }
    }

    const changeStatus = (title, status, index) => {
        if (status == "To Do") {
            data.splice(index, 1, { title: title, status: "In Progress" })
            setData([...data])
        }
        else if (status == "In Progress") {
            data.splice(index, 1, { title: title, status: "Done" })
            setData([...data])
        }
        else if (status == "Done") {
            data.splice(index, 1, { title: title, status: "To Do" })
            setData([...data])
        }
        // console.log(data);

    }

    const renderItem = ({ item, index }) => {
        const { title, status } = item;
        return (
            <View style={styles.listContainer}>
                <Text style={{ width: "37%" }}>{title}</Text>
                <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                    <View style={{ flexDirection: "row" }}>

                        <TouchableOpacity style={styles.delete}
                            onPress={() => deleteItem(index)}
                        >
                            <Icon name="trash" size={20} color={"#D172CE"} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.edit}
                            onPress={() => {
                                setIcon("pencil")
                                setNewItem(title)
                                setEditIndex(index)
                            }}
                        >
                            <Icon name="pencil" size={20} color={"#D172CE"} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.change} onPress={() => changeStatus(title, status, index)}>
                        <Text style={styles.ddtext}>{status}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.addItemView}>
                <TextInput
                    style={styles.inputField}
                    placeholder={"Add item"}
                    placeholderTextColor={"#C39BD3"}
                    value={newItem}
                    onChangeText={txt => setNewItem(txt)}
                />
                <TouchableOpacity onPress={() => {
                    // console.log(data);
                    if (icon == "pencil") {
                        data.splice(editIndex, 1, { title: newItem, status: data[editIndex].status })
                        // console.log("updated");
                        setIcon("plus")
                    }
                    else {
                        // console.log("added");
                        data.push({ title: newItem, status: "To Do" })
                        Keyboard.dismiss()
                    }
                    setNewItem("")
                }}>
                    <Icon
                        name={icon}
                        size={50}
                        color={"#C39BD3"}
                    />
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}

            />
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EBEDEF",
        flex: 1,
    },
    addItemView: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: 'space-around',
        width: "100%",
        height: "20%"
    },
    inputField: {
        backgroundColor: "#EBEDEF",
        fontSize: 28,
        fontWeight: "900",
        fontFamily: "serif",
        paddingHorizontal: 20,
        color: "#C39BD3",
        width: "80%",
        height: "60%",
        borderWidth: 3,
        borderRadius: 5
    },
    itemList: {
        fontSize: 28,
        width: "70%"
    },
    listContainer: {
        backgroundColor: "#BFDBD3",
        marginVertical: 20,
        padding: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        alignSelf: "center",
        width: "90%",
        borderWidth: 2,
        borderRadius: 4

    },
    change: {
        backgroundColor: "#DFF6B6",
        width: "53%",
        alignItems: "center",
        padding: 12,
    },
    ddtext: {
        color: "#A600FF"
    },
    modalContainer: {
        backgroundColor: "lightblue",
        borderWidth: 15,
        flex: 1,
        justifyContent: "center"
    },
    rowDirection: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    edit: {
        right: 10,
        paddingVertical: 12,
    },
    delete: {
        right: 20,
        paddingVertical: 12,

    }

})
export default Todo;