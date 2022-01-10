import React from 'react'
import { View, Text,StyleSheet, Image, TouchableOpacity } from 'react-native'

const Welcome = () => {
    return (
        <View style={Styles.container}>
            <View style={Styles.imgWrapper}>
                <Image style={Styles.logo} source={require("../../assets/logo.png")} />
                </View>
            <View style={Styles.headerWrapper} >
                <Text style={Styles.header}>Start explore Plannetic</Text>
                    <Text style={Styles.subTitle}>and get extra features {'\n'}by registration </Text>
            </View>
            <Buttons />
        </View>
    )
}

const Buttons = () => (
    <View style={Styles.buttonWrapper}>
        <TouchableOpacity style={Styles.btn}>
            <Text style={Styles.btnText}>Join Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.btn,{backgroundColor:"white"}]}>
            <Text style={[Styles.btnText,{color:'#19B4BF'}]}>Log In</Text>
        </TouchableOpacity>
    </View>
);
const Styles = StyleSheet.create({
    container: {
        
    },
    imgWrapper: {
        alignItems:"center"
    },
    logo: {
        height: 130,
        width: 130,
        resizeMode: "contain",
        marginTop:100
    },
    headerWrapper: {
        marginTop: 20,
      paddingHorizontal:25  
    },
    header: {
        color: "white",
        fontSize: 25,
        // lineHeight: 84,
        fontWeight: "bold",
        
        textAlign: "center",
        
       
    },
    subTitle: {
        color: "white",
        fontSize: 25,
        textAlign: "center",
        
    },
    buttonWrapper: {
        alignItems: "center",
        marginTop:40
    },
    btn: {
        marginTop:20,
        backgroundColor: "#19B4BF",
        padding: 10,
        alignItems: "center",
        borderRadius: 7,
        width:"80%"
    },
    btnText: {
        color: "white",
        fontSize: 20,
        fontWeight:"bold"
    }
})
export default Welcome
