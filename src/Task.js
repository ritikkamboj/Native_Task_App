import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React from 'react'

const Task = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputBox} placeholder='Add Your Tasks' />
                <Button title='Add your task' />
            </View>
            <View>
                <Text style={styles.border}></Text>
                <Text style={styles.textTitle}>Your Tasks : </Text>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 15

    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },
    inputBox: {
        width: "60%",
        borderWidth: 1,
        borderColor: "#cccCCC",
        borderRadius: 10,
        padding: 5,
        paddingLeft: 15


    },
    textTitle:
    {
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 10,
        color: "blue"

    },
    border:
    {
        borderBottomWidth: 1,
        color: "#cccccc"
    }

})
export default Task