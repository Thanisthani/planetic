import { View, Text, StatusBar,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';


const Header = ({navigation}) => {
  return (
    <View style={Styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons style={Styles.icon} name="chevron-back" size={35} color="black" />
          </TouchableOpacity>

          <View style={Styles.profile}>
              <Image style={Styles.img} source={require("../../assets/profile-pic.jpg")} />
              <Text style={Styles.followername}>Thanistas</Text>
              <Text style={Styles.followText}>Follow</Text>
          </View>

          <View style={Styles.details}>
              <View style={Styles.countWrapper}>
                  <Text style={Styles.count}>500k</Text>
                  <Text style={Styles.countText}>Followers</Text>

              </View>

              <View style={Styles.countWrapper}>
                  <Text style={Styles.count}>300k</Text>
                  <Text style={Styles.countText}>Following</Text>

              </View>

              <View style={Styles.countWrapper}>
                  <Text style={Styles.count}>45</Text>
                  <Text style={Styles.countText}>Visited</Text>
                      <Text style={Styles.countText}>Places</Text>

              </View>

          </View>
          

    </View>
  )
}

const Styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight + 10,
        marginHorizontal:20
    },
    img: {
        width: 130,
        height: 130,
        borderRadius: 50,
     
      
    },
    profile: {
        alignItems:"center"
    },

    followername: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 10,
        letterSpacing: 1,
        marginBottom:20
    },
    followText: {
        fontSize: 20,
        borderColor: "#b6067f",
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 35,
        paddingVertical: 8,
        color: "#900564",
        fontWeight: "bold",
        letterSpacing: 2,
    },

    details: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop:20
    },
    countWrapper: {
        alignItems:"center"
    },
    count: {
        fontSize: 25,
        fontWeight: "bold",
        color:"#19B4BF"
    },
    countText: {
        fontSize: 18,
        color:"#9b9b9e"
        
    }
    
})
export default Header