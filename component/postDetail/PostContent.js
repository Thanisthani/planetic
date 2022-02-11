import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

const PostContent = () => {
  return (
      <View>
          <View style={Styles.followWrapper}>
              <View style={Styles.profileWrapper}>
                  <Image style={Styles.logo} source={require("../../assets/profile-pic.jpg")} />
                  <Text style={Styles.name}>Kumar</Text>
              </View>
              
              <Text style={Styles.followText}>Unfollow</Text>
          </View>
          <View>
              <Text style={Styles.paragh}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </Text>
          </View>
      </View>
      
  )
}

const Styles = StyleSheet.create({
    logo: {
        height: 50,
        width: 50,
        borderRadius: 25,
      
       
    },
    followWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        justifyContent: "space-between",
        marginHorizontal:30
    },
    followText: {
        fontSize: 18,
        borderColor: "#b6067f",
        borderWidth: 2,
        borderRadius: 30,
        paddingHorizontal: 13,
        paddingVertical: 3,
        color:"#900564"
    },
    profileWrapper: {
        flexDirection: "row",
        alignItems:"center"
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft:10
    },
    paragh: {
        fontSize: 18,
        color: "#afafb1",
        textAlign: 'justify',
        marginHorizontal: 20,
        marginTop:20
    }
})
export default PostContent