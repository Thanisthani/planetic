import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const Post = ({navigation}) => {
  return (
    <View style={Styles.container}>
          <View style={Styles.postWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate("PostDetailScreen")} >
              <View style={Styles.postContainer}>
                  <Image style={Styles.postImg} source={require("../../assets/Ella.jpeg")} />
                  <Text style={Styles.title}>How to trek</Text>
                  <Text style={Styles.content}>ougiufhosdhkgvvadsh ighaliudsdasuifd  giuadfgoo asfdhflidu igdsaiugsfa9hi</Text>
                  <View style={Styles.postBottom}>
                      <View style={{flexDirection:"row", alignItems:"center"}}>
                          <Image style={Styles.profilePic} source={require("../../assets/profile-pic.jpg")} />
                          <Text style={Styles.name}>Thanistas</Text>
                      </View>
                      
                      <AntDesign name="hearto" size={24} color="black" />

                      </View>
                      
                      <View>
                          
                      </View>
                      
                  </View>
              </TouchableOpacity>
              

          </View>
          
    </View>
  )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f2fc",

        
    },
    postContainer: {
        backgroundColor: "white",
        paddingBottom:10
    },
    postWrapper: {
        marginTop:20
    },
    postImg: {
        height: 230,
        width:"100%"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 20,
        marginTop:10
    },
    content: {
        fontSize: 18,
        color: "#afafb1",
        marginHorizontal:20
    },
    postBottom: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginTop:10
     },
    profilePic: {
        height: 50,
        width: 50,
        borderRadius: 30,   
    },
    name: {
        fontSize: 17,
        fontWeight: "bold",
        paddingLeft:10
    },
})
export default Post