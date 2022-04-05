import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import ForgotPassword from '../component/forgotPassword/ForgotPassword'

const ForgotPasswordScreen = ({navigation}) => {
  return (
    <View style={Styles.conatiner}>
      <ForgotPassword navigation={navigation}/>
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


export default ForgotPasswordScreen