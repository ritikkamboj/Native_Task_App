import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";

const AddTask = ({ setTaskList }) => {

    const [task, setTask] = useState("");

    const handleInputValue = (input) => {
        setTask(input);
    };

    const handleAddButton = () => {
        if (!task) {
            return Alert.alert("Please Add any Task")
        }
        setTaskList((prevList) => {
            return [...prevList, task];
            alert("task Added");
            setTask("");
        });
    };
    return (
        <View style={styles.inputContainer}>
            <TextInput
                onChangeText={handleInputValue}
                style={styles.inputBox}
                placeholder="Add Your Tasks"
            />
            <Button onPress={handleAddButton} title="Add your task" />
        </View>
    );
};
const styles = StyleSheet.create({
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
});

export default AddTask;
