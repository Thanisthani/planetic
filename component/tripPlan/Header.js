import { View, Text, StyleSheet, StatusBar,ImageBackground,TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons} from '@expo/vector-icons'; 

const Header = ({navigation,imgURL,placeName,budget}) => {
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
                  
                 

                  <Text></Text>
                  
                  </View>
                  <Text style={Styles.heading}>Trip to {placeName}</Text>
                  <Text style={Styles.budgetText}>Budget ${ budget}</Text>
              </View>       
                    
          </ImageBackground>

          <View style={Styles.bottomContainer}>

          </View>
          
    </View>
  );
};

const Styles = StyleSheet.create({
    container: {
        
    },
    img: {
        height:160,
        zIndex:200
        // borderBottomLeftRadius: 2,
        // borderBottomRightRadius:5

    },
    headerContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.2)',
        flex:1
    },
    headingWrapper: {
        flexDirection: "row",
        paddingTop: 10,
        justifyContent: "space-between",
        alignItems:"center",
        paddingHorizontal: 10,
      
    },
    heading: {
        color: "white",
        fontSize: 26,
        fontWeight: "700",
        padding:10
    },
    bottomContainer: {
        height: 40,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: "red",
        position: 'absolute',
        top:0
    },
    budgetText: {
        color: "white",
        backgroundColor: "rgba(	123, 157, 159,0.8)",
        width: 120,
        fontSize: 17,
        borderRadius: 30,
        marginLeft: 20,
        paddingHorizontal: 10,
        paddingVertical:7
    }
})

export default Header;
