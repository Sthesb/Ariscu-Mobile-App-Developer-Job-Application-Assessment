import React, {useState} from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'

const Login = ({ navigation, route }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState( )
    

    const myLogin = async() => {
        await fetch('https://f908-41-114-51-133.ngrok.io/api/login', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "email" : email, "password" : password })
            
        })
        .then(res => res.json())
        .then( resData => {
            // console.log(resData.token)
            if(resData.token == undefined){
                alert(resData.message)
            }else{
                navigation.navigate("Home", {'id' : resData.user.id , 'token' : resData.token })
            }
            // Keyboard.dismiss();
        })
        .catch(err => {
            console.log(err);
        });
    }

    // console.log(route.params?.id);


    return (
        <KeyboardAvoidingView style={styles.container} 
            behavior={[Platform.OS === 'andriod' ? "padding" : "height", Platform.OS === 'ios' ? "padding" : "height"]}>
            <Text>Login to ToDo App</Text>
            <View style={styles.inputContainer} >
                <TextInput 
                    placeholder="Email" 
                    value={ email}  
                    onChangeText={text => setEmail(text) }
                    style={styles.input}
                    />
                <TextInput 
                    placeholder="Password" 
                    value={ password}  
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                    />
            </View>
            <View style={styles.buttoContainer}>
                <TouchableOpacity  onPress={() => myLogin()} style={styles.button}>
                    <Text style={styles.buttonLoginText} >Login</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=> navigation.navigate("Register")} style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonRegisterText} >Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    inputContainer:{
        width: '80%'
    },
    input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 8
    },
    button:{
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttoContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40

    },
    buttonOutline:{
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonLoginText:{
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    buttonRegisterText:{
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16
    }
})
