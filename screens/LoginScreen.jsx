import { 
    KeyboardAvoidingView, 
    Pressable,
    StyleSheet, 
    Text, 
    TextInput,  
    View 
} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword 
} from "firebase/auth";

const LoginScreen = () => {
    const [email, setEmail] = useState('dtabooth@gmail.com')
    const [password, setPassword] = useState('Lucile101')
    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                navigation.replace("Home")
            }
        })
        return unsubscribe
    }, [])

    const handleUserSignup = e => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user
                console.log(`register user: ${user.email}`)
            })
            .catch(error => console.log(error))
    }

    const handleUserSignin = e => {       
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user
                console.log(`signin user: ${user.email}`)
            })
            .catch(error => console.log(error))
    }
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behaviour="padding"
            >
          
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={ text => setEmail(text) }
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={ password => setPassword(password) }
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <Pressable
                    style={styles.button}
                    onPress={handleUserSignin}
                >
                    <Text style={styles.buttonText}>Login</Text>    
                </Pressable>
                <Pressable
                    style={[styles.button, styles.buttonOutline]}
                    onPress={handleUserSignup}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>    
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    inputContainer:{
        width: '80%'
    },
    input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop:5
    },
    buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button:{
        backgroundColor: '#0782f9',
        width: '100%',
        padding: 15,
        borderRadius: 10,        
        alignItems: 'center'
    },
    buttonOutline:{
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782f9',
        borderWidth: 2,
        alignItems: 'center'
    },
    buttonText:{
        color: 'white',
        fontWeight: 700,
        fontSize: 16
    },
    buttonOutlineText:{
        color: '#0782f9',
        fontWeight: 700,
        fontSize: 16
    }
})