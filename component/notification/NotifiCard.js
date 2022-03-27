import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const NotifiCard = ({image,place,placeId,budget,navigation}) => {
  return (
      <TouchableOpacity style={Styles.container} onPress={() => {
          navigation.navigate('TripPlanScreen',
              {
                  place_id: placeId,
                  imgURL: image,
                  place_name: place,
                  budget: budget
              })
      }}
            >
          <View style={{flexDirection:'row'}}>
              <Image style={Styles.img} source={{ uri:image}} />
              <View style={{ marginLeft: 10 ,marginTop:5, width:240}}>
                  <View style={Styles.ago}>
                      <Text style={{color:"#9b9b9e"}}>21 min ago</Text>
                      
                  </View>
                  
                  <Text style={Styles.title}>You have one day more for your {place} trip</Text>
                  
              </View>
              
          </View>
    
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
    container: {
        marginTop:10,
        backgroundColor: "white",
        marginHorizontal: 20,
        paddingHorizontal: 0,
        borderRadius: 25,
        height: 90,
        // borderWidth: 0.4,
        borderColor: "#19B4BF",
        elevation: 4,
    },
    img: {
        height: 90,
        borderRadius: 25,
        width:90
    },
    ago: {
        alignItems: 'flex-end',
        
    },
    title: {
        marginTop: 0,
        fontSize: 17,
        color:"#4d4d4f"
    }
})

export default NotifiCard