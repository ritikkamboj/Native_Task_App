import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

const Task = () => {
    const [task, setTask] = useState("");

    const [taskList, setTaskList] = useState([]);

    // handle input values

    const handleInputValue = (input) => {
        setTask(input);
    };

    //  handling button funcntioning

    const handleAddButton = () => {
        setTaskList((prevList) => {
            return [...prevList, task];
            alert("task Added");
            setTask('');
        });
    };
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={handleInputValue}
                    style={styles.inputBox}
                    placeholder="Add Your Tasks"
                />
                <Button onPress={handleAddButton} title="Add your task" />
            </View>
            <View>
                <Text style={styles.border}></Text>
                <Text style={styles.textTitle}>Your Tasks : </Text>
                <View >
                    {
                        taskList.map((item, index) => (<Text style={styles.taskItem} key={index}>{item}</Text>))
                    }
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 15,
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    inputBox: {
        width: "60%",
        borderWidth: 1,
        borderColor: "#cccCCC",
        borderRadius: 10,
        padding: 5,
        paddingLeft: 15,
    },
    textTitle: {
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 10,
        color: "blue",
    },
    border: {
        borderBottomWidth: 1,
        color: "#cccccc",
    },
    taskItem:
    {
        margin: 10,
        padding: 20,
        borderRadius: 20,
        backgroundColor: "green",
        color: "white"
    }
});
export default Task;
