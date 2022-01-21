import React from 'react'
import { View, Image, Text, ImageBackground, StatusBar, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { auth } from '../../firebase';
import { signOut } from "firebase/auth"


const Header = () => {

    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log("User sign out")
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <View style={Styles.container}>
            <ImageBackground style={Styles.img}
                imageStyle={{ borderBottomRightRadius: 30, borderBottomLeftRadius: 30, }}
                source={require("../../assets/heading3.jpg")} resizeMode="cover" >
                
                
                <View style={Styles.imgWrapper}>

                    <TouchableOpacity onPress={() => handleSignOut()}>
                    <Image style={Styles.profile} source={require("../../assets/profile-pic.jpg")} /> 
                    </TouchableOpacity>
                
                    <TouchableOpacity>
                        <Text style={Styles.getTrip}>+ Get trip plan</Text>
                    </TouchableOpacity> 
                </View>
                
                    <View style={Styles.headingWrapper}>
                        <Text style={[Styles.heading, { fontWeight:'bold'}]}>Explore</Text>
                        <Text style={Styles.heading}>new places</Text>
                    </View>
                    <View style={Styles.searchWrapper}>
                    <View style={Styles.search}>
                    <AntDesign name="search1" size={20} color="black" />
                    <TextInput style={Styles.searchtext} placeholder=' Where do you want to go?' />   
                        </View>
                        </View>
                    
                    
            </ImageBackground>
        
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        // flex: 1,
       
    },
    img: {
        height: 210,
        zIndex:200
        // borderBottomLeftRadius: 2,
        // borderBottomRightRadius:5

    },
    imgWrapper: {
        marginTop: StatusBar.currentHeight+10,
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight:20
    },
    profile: {
        marginTop: 5,
        marginLeft:20,
        height: 60,
        width: 60,
        borderRadius:50
    },
    getTrip: {
        backgroundColor: "#19B4BF",
        padding: 10,
        borderRadius: 30,
        color: "white",
        fontSize:15
    },
    headingWrapper: {
        flexDirection: "row",
        paddingLeft: 20,
        paddingTop: 20,
        
    },
    heading: {
        color: "white",
        fontSize: 28,
        paddingRight:5
    },
    searchWrapper: {
        alignItems:"center"
    },
    search: {
        alignItems: "center",
        marginTop: 30,
        flexDirection: "row",
        backgroundColor: "white",
        elevation: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
        width: "87%",
        borderRadius: 13,
        
    },
    searchtext: {
        
        fontSize: 17,
        color: "#afafb1",
   
        
        
    }
})

export default Header
