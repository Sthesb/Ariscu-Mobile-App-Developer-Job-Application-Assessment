import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { FlatList, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from '../components/Task';

const Home = ({ navigation, route }) => {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    // get all todos
    const getTodos = () => {
        fetch(`https://f908-41-114-51-133.ngrok.io/api/todos/${route.params?.id}`)
        // fetch(`https://b9d7-41-216-201-251.ngrok.io/api/todos/6`)
        .then((res) => res.json())
        .then(resData => {
            console.log(resData)
            setTaskItems(resData)
        })
        .catch((error) => console.log(error))
    }
   
    // add todo
    const addTodo = () => {
        fetch(`https://f908-41-114-51-133.ngrok.io/api/todos`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "user_id" : route.params?.id, "todo" : task })
        }).then((res) => res.json())
        .then(resData => {
            Keyboard.dismiss();
            
            setTaskItems(resData)
            getTodos();
        })
        .catch((error) => console.log(error))
    }

    // delete todo
    const deleteTodo = (todoId) => {
        fetch(`https://f908-41-114-51-133.ngrok.io/api/todos/${todoId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            
        }).then((res) => res.json())
        .then(resData => {
            console.log('delete', resData)
            getTodos();
        })
        .catch((error) => console.log(error))
    }



    useEffect( () => {
        getTodos()
    }, [])
   
  



    
    return (
        <View style={styles.container}>
            <View style={styles.tasksWrapper} >
                <Text style={styles.sectionTitle} > </Text>
                <FlatList 
                    
                    data={taskItems}
                    keyExtractor={item => item.id.toString()}
                    renderItem ={({ item, index }) => (
                        <TouchableOpacity key={index.id}  >
                            <View style={styles.item}>
                                <View style={styles.itemLeft} >
                                    <View style={styles.itemSquare} ></View>
                                    <Text style={styles.itemText}>{item.todo}</Text>
                                </View>
                                <TouchableOpacity onPress={() => deleteTodo(item.id) }><Text style={styles.itemCircle}>Delete</Text></TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
            

            {/*  Write a task session */}
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"} 
                style={styles.writeTaskWapper} 
            >
                <TextInput style={styles.addTodoInput} 
                placeholder={"What's on your mind ?"} 
                onChangeText={text => setTask(text)}
                value={task}
                />

                <TouchableOpacity onPress={() => addTodo()}>
                <View style={styles.addTodoWrapper}>
                    <Text style={styles.addTodoButtonText}>+</Text>
                </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
      },
      tasksWrapper: {
        paddingTop: 0,
        paddingHorizontal: 20
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15
      },
      items: {
        paddingHorizontal: 10
        
      },
      writeTaskWapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
      },
      addTodoInput: {
        paddingVertical: 15,
        width: 250,
        backgroundColor: '#E8EAED',
        borderRadius: 50,
        paddingHorizontal: 15,
        borderColor: '#c0c0c0',
        borderWidth: 1
      },
      addTodoWrapper: {
        width:60,
        height: 60,
        backgroundColor: '#55BCF6',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#c0c0c0',
        borderWidth: 1
      },
      addTodoButtonText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
      },
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
