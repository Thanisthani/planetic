import { View, Text, StyleSheet, StatusBar,ImageBackground,TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons} from '@expo/vector-icons'; 

const Header = ({navigation,imgURL}) => {
  return (
      <View style={Styles.container} >
          
       <ImageBackground style={Styles.img}
                imageStyle={{ borderBottomRightRadius: 0, borderBottomLeftRadius: 0, }}
              source={{uri:imgURL}} resizeMode="cover" >
                
              <View style={Styles.headerContainer}>
                  
                  <View style={Styles.headingWrapper}>
                      
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                      <Ionicons style={{ paddingTop: 10 }} name="chevron-back" size={30} color="white" />
                  </TouchableOpacity>
                  
                  <Text style={Styles.heading}>Trip to Kandy</Text>

                  <Text></Text>
                  
                  </View>
              </View>       
                    
          </ImageBackground>

          <View style={Styles.bottomContainer}>

          </View>
          
    </View>
  );
};

const Styles = StyleSheet.create({
    container: {
        marginTop:StatusBar.currentHeight
    },
    img: {
        height:160,
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
    headerContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.2)',
        flex:1
    },
    headingWrapper: {
        flexDirection: "row",
        paddingTop: 20,
        justifyContent: "space-between",
        alignItems:"center",
        paddingHorizontal: 10,
      
    },
    heading: {
        color: "white",
        fontSize: 26,
        fontWeight:"700"
    },
    bottomContainer: {
        height: 40,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: "red",
        position: 'absolute',
        top:0
    }
})

export default Header;
