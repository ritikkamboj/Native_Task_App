import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Alert,
    Modal,
} from "react-native";
import React, { useState } from "react";

const AddTask = ({ setTaskList, handleHideModal }) => {
    const [task, setTask] = useState("");

    const handleInputValue = (input) => {
        setTask(input);
    };

    const handleAddButton = () => {
        if (!task) {
            return Alert.alert("Please Add any Task");
        }
        setTaskList((prevList) => {
            return [
                ...prevList,
                { task: task, id: (Math.random() * 100000).toString() },
            ];
            alert("task Added");
            setTask("");

        });
        handleHideModal();
    };
    return (
        <Modal animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={handleInputValue}
                    style={styles.inputBox}
                    placeholder="Add Your Tasks"
                />
                <View style={styles.btnGroup}>
                    <View style={styles.btn}>

                        <Button onPress={handleAddButton} title="Add your task" />
                    </View>
                    <View style={styles.btn} >
                        <Button title="CANCEL" onPress={handleHideModal} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
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
    btnGroup:
    {
        flexDirection: "row",
        marginTop: 20
    },
    btn:
    {
        width: "40%",
        marginHorizontal: 20

    }
});

export default AddTask;
