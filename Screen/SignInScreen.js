import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import SignIn from '../component/signIn/SignIn'

const SignInScreen = ({navigation}) => {
    return (
        <View style={Styles.conatiner}>
            <SignIn navigation ={navigation} />
        </View>
    )
}

const Styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingTop:StatusBar.currentHeight,
    }
})
export default SignInScreen
