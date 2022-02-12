import { View,TextInput, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native'
import { AntDesign ,Feather} from '@expo/vector-icons';
import React from 'react'


const Header = ({navigation}) => {
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
          <TouchableOpacity onPress={() => navigation.navigate("AddPostScreen")}>
              <Feather name="plus-square" size={33} color="black" />
              
          </TouchableOpacity>
          
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
        height: 55,
        width: 55,
        borderRadius: 30,
        marginLeft: 20,
        marginRight: 10,
     
        
    },
    searchWrapper: {
        alignItems: "center",
        marginRight:20
    },
    search: {
        alignItems: "center",
        // marginTop: 30,
        flexDirection: "row",
        backgroundColor: "#f4f4f4",
        // elevation: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: 250,
        borderRadius: 10,
        
    },
    searchtext: {
        
        fontSize: 20,
        color: "#afafb1",
   
        
        
    },
})
export default Header