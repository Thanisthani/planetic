import { View,TextInput, StyleSheet, StatusBar, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'


const Header = () => {
  return (
    <View style={Styles.container}>
          <Image style={Styles.logo} source={require("../../assets/profile-pic.jpg")} />
          <View style={Styles.searchWrapper}>
                   
                   <View style={Styles.search}>
                       <AntDesign name="search1" size={20} color="black" />
                           <TextInput pointerEvents="none"
                               style={Styles.searchtext} placeholder='   Search traveler'
                       />
                      
                       
                   </View>
                       
          </View>
          
    </View>
  )
}

const Styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight + 10,
        flexDirection: "row",
        alignItems: "center",
        marginBottom:10
    },
    logo: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginLeft: 20,
        marginRight: 10,
     
        
    },
    searchWrapper: {
        alignItems:"center"
    },
    search: {
        alignItems: "center",
        // marginTop: 30,
        flexDirection: "row",
        backgroundColor: "#f4f4f4",
        // elevation: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: 300,
        borderRadius: 10,
        
    },
    searchtext: {
        
        fontSize: 20,
        color: "#afafb1",
   
        
        
    },
})
export default Header