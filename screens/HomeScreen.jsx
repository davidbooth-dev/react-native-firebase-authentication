import { 
    Pressable, 
    StyleSheet, 
    Text, 
    View 
} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { auth } from '../firebase';
import { 
    signOut 
} from "firebase/auth";

const HomeScreen = () => {
    const navigation = useNavigation()

    const SignoutUser = e => {
        signOut(auth)
        .then(() => {
            navigation.replace("Login")
        })
        .catch(error => console.log(error))
    }

    return (
        <View style={styles.container}>
            <Text>Email: {auth.currentUser?.email}</Text>
            <Pressable
                style={styles.button}
                onPress={SignoutUser}
            >
                <Text style={styles.buttonText}>Sign Out</Text>    
            </Pressable>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    button:{
        backgroundColor: '#0782f9',
        width: '60%',
        padding: 15,
        borderRadius: 10,        
        alignItems: 'center',
        marginTop: 40
    },
    buttonText:{
        color: 'white',
        fontWeight: 700,
        fontSize: 16
    },
})