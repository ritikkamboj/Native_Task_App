import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    ScrollView,
    FlatList,
} from "react-native";
import React, { useState } from "react";

import AddTask from "./components/AddTask";
import TaskItem from "./components/TaskItem";

const Task = () => {
    const [showModal, setShowModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    // handle input values

    //  handling button funcntioning

    //handle Delete

    const handleDelete = (id) => {
        console.log("jai shree ram");

        setTaskList((currentList) => currentList.filter((t) => t.id !== id));
    };

    const handleModal = () => {
        setShowModal(true);
    };

    const handleHideModal = () => {
        setShowModal(false)

    }

    return (
        <View style={styles.container}>
            {showModal && <AddTask handleHideModal={handleHideModal} setTaskList={setTaskList} />
            }
            <Button title="ADD TASK" onPress={handleModal} />
            <View>
                <Text style={styles.border}></Text>
                {taskList.length > 0 ? (
                    <Text style={styles.textTitle}>Your Tasks : </Text>
                ) : (
                    <Text style={styles.textTitle}>No Tasks: </Text>
                )}
                <View>
                    {/* <ScrollView> */}
                    <FlatList
                        data={taskList}
                        renderItem={({ item, index }) => {
                            return (
                                // <Text style={styles.taskItem}>
                                //     {index + 1}: {item}
                                // </Text>
                                <TaskItem
                                    handleDelete={handleDelete}
                                    item={item}
                                    index={index}
                                />
                            );
                        }}
                        keyExtractor={(item, index) => {
                            return index;
                        }}
                    />
                    {/* {taskList.map((item, index) => (
              <Text style={styles.taskItem} key={index}>
                {item}
              </Text>
            ))} */}
                    {/* </ScrollView> */}
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
    taskItem: {
        margin: 10,
        padding: 20,
        borderRadius: 20,
        backgroundColor: "green",
        color: "white",
    },
});
export default Task;
