import { View, Text,Image,StyleSheet, ScrollView } from 'react-native';
import React from 'react';


const PlacePhoto = () => {
  return (
    <View>
      <ScrollView>
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
        </ScrollView>
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
    width: "49.5%",
    // height:200,
    maxHeight:280,
    // resizeMode:"contain"
  }
})
export default PlacePhoto;
