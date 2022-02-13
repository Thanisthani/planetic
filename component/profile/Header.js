import { View, Text , StyleSheet,TouchableOpacity,StatusBar} from 'react-native'
import React from 'react'
import { Ionicons,Feather } from '@expo/vector-icons';

const Header = ({navigation}) => {
  return (
    <View style={Styles.container}>
    
          <View style={Styles.headingWrapper}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons style={Styles.icon} name="chevron-back" size={35} color="black" />
              </TouchableOpacity>
              
              <Feather name="more-horizontal" size={35} color="black" />

          </View>
          <Text style={Styles.heading}>Profile</Text>
    </View>
  )
}


const Styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight + 10,
        marginHorizontal:20
    },
    headingWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
    },
    heading: {
        paddingTop:20,
        fontSize: 28,
        fontWeight:'600',
        color: "black",
        fontWeight: "bold",
        
        // color:"#4c4c4b"
        
    },

}) 
export default Header