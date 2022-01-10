import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import SignUp from '../component/signUp/SignUp'

const SignUpScreen = ({navigation}) => {
    return (
        <View style={Styles.conatiner}>
            <SignUp navigation={ navigation}/>
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
export default SignUpScreen
