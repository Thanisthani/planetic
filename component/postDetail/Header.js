import { View, Text ,StyleSheet,ImageBackground,TouchableOpacity, StatusBar} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import {useRoute} from '@react-navigation/native'


const Header = ({ navigation }) => {
  const route = useRoute();
  const { post } = route.params;
  
  return (
    <View>
       <ImageBackground style={Styles.img}
                imageStyle={{ borderBottomRightRadius: 30, borderBottomLeftRadius: 30, }}
        source={{uri:post.imgURL}} resizeMode="cover" >
        <View style={Styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            
            <Ionicons style={Styles.icon} name="chevron-back" size={35} color="black" />
            
          </TouchableOpacity>
          
          <Text style={Styles.heading}>{ post.caption}</Text>

        </View>
        
      </ImageBackground>
      
    </View>
  )
}


const Styles = StyleSheet.create({
  container: {
  
  },
  img: {
    height: 240,
    zIndex:200
  },
  icon: {
   paddingLeft:10,
    paddingTop:StatusBar.currentHeight+10
  },
  headerWrapper: {
    justifyContent: "space-between",
    flex:1
  },
  heading: {
    paddingBottom: 20,
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    paddingLeft:20
  }
})
export default Header