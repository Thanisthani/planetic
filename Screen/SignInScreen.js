import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import SignIn from '../component/signIn/SignIn'

const SignInScreen = () => {
    return (
        <View style={Styles.conatiner}>
            <SignIn />
        </View>
    )
}

const Styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: "white",
        paddingTop:StatusBar.currentHeight,
    }
})
export default SignInScreen
