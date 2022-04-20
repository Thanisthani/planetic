import { View, Text,Image,StyleSheet,FlatList, ScrollView } from 'react-native';
import React, { useState,useEffect } from 'react';
import { useRoute } from '@react-navigation/native'


const PlacePhoto = () => {
  const [tplace, setTplace] = useState();
  const route = useRoute();
  const { images } = route.params;

// render Item
  
  const renderItem = ({item}) =>
  {
    return (
      <View style={{flexDirection:"row",paddingLeft:5}}>
        <Image style={Styles.img} source={{uri:item}} />
       
      </View>
    )
    
    }
  
    // useEffect(() => {

    //  console.log(images)
     
    // }, [])

  return (
    <View>
      {/* <ScrollView>
      <View style={Styles.imgWrapper}>
        <Image style={Styles.img} source={require("../../assets/thalatha2.jpg")} />
        <Image style={Styles.img} source={require("../../assets/thalatha4.jpg")} />
      </View>
      <View style={Styles.imgWrapper}>
        <Image style={Styles.img} source={require("../../assets/thalatha5.jpg")} />
        <Image style={Styles.img} source={require("../../assets/thalatha3.jpg")} />
        </View>
        <View style={Styles.imgWrapper}>
        <Image style={Styles.img} source={require("../../assets/profile-pic.jpg")} />
        <Image style={Styles.img} source={require("../../assets/heading3.jpg")} />
        </View>
        </ScrollView> */}
      
      <FlatList
        data={images}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item, index) => String(index)}
        // horizontal={false}
      />
    </View>
  );
};


const Styles = StyleSheet.create({
  imgWrapper: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 5,
    justifyContent:"space-between"
  },
  img: {
    width: 200,
    height: 280,
    marginBottom:5,
    // maxHeight:280,
    // resizeMode:"contain"
  }
})
export default PlacePhoto;
