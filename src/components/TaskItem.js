import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TaskItem = ({ item, index }) => {
    return (
        <View>
            <Text style={styles.taskItem}>
                {index + 1}: {item}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    taskItem: {
        margin: 10,
        padding: 20,
        borderRadius: 20,
        backgroundColor: "green",
        color: "white",
    },

})

export default TaskItem