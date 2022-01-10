import React from 'react'
import { View, Text, StatusBar,StyleSheet, ImageBackground } from 'react-native'
import Welcome from '../component/welcome/Welcome'

const WelcomeScreen = () => {
    return (
        <View style={Styles.conatiner}>
            <ImageBackground style={Styles.img} source={require("../assets/bg-img.jpg")} resizeMode="cover" >
            <Welcome />
                </ImageBackground>
            
        </View>
    )
}

const Styles = StyleSheet.create(
    {
        conatiner: {
            flex: 1,
            paddingTop:StatusBar.currentHeight,
        },
        img: {
            flex: 1,

        }
    }
)
export default WelcomeScreen
