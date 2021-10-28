import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft} >
                <View style={styles.itemSquare} ></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <TouchableOpacity ><Text style={styles.itemCircle}>Delete</Text></TouchableOpacity>
        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#E8EAED',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    itemSquare:{
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
    },
    itemText:{
        maxWidth: '80%'
    },
    itemCircle:{
        color: 'red',
        width: 55,
        height: 25,
    },
})
