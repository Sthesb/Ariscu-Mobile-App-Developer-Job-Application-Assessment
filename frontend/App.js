import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from './screens/Profile';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';

// screens

const Stack = createNativeStackNavigator();

export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Login" options={{ headerLargeTitle:true, headerShown: false }} component={Login}/>
        <Stack.Screen name="Register" options={{ headerLargeTitle:true, headerShown: false  }} component={Register}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  tasksWrapper: {
    paddingTop: 80,
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
});
// #E8EAED
