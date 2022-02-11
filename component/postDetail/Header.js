import { View, Text ,StyleSheet,ImageBackground,TouchableOpacity, StatusBar} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';


const Header = () => {
  return (
    <View>
       <ImageBackground style={Styles.img}
                imageStyle={{ borderBottomRightRadius: 30, borderBottomLeftRadius: 30, }}
        source={require("../../assets/Ella.jpeg")} resizeMode="cover" >
        <View style={Styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            
            <Ionicons style={Styles.icon} name="chevron-back" size={35} color="black" />
            
          </TouchableOpacity>
          
          <Text style={Styles.heading}>What are the different between trek & hike </Text>

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