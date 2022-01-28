import { View, Text, StatusBar,StyleSheet,ImageBackground,TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons} from '@expo/vector-icons'; 

const Header = ({navigation,imgURL,place_name,amount,category}) => {
  return (
    <View>
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
          <Text style={Styles.cat}>{category}</Text>
          <Text style={Styles.heading}>{ place_name}</Text>
          <Text style={Styles.price}>{ amount}/person</Text>
                 
              </View>       
                    
          </ImageBackground>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    
  },
  img: {
    height:220,
    zIndex:200
    // borderBottomLeftRadius: 2,
    // borderBottomRightRadius:5

},
headerContainer: {
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
  flex: 1,
    paddingLeft:20
},
headingWrapper: {
    flexDirection: "row",
    paddingTop: 10,
    justifyContent: "space-between",
    alignItems:"center",
    paddingHorizontal: 0,
  
  },
  cat: {
    backgroundColor:"rgba(	133, 133, 133,0.8)",
    // blurRadius: 1,
    paddingHorizontal: 10,
    paddingVertical:4,
    width: 83,
    borderRadius: 30,
    color: "white",
    fontSize: 16,
    // fontWeight: "bold",
    marginTop:10
    
},
heading: {
    color: "white",
    fontSize: 26,
    fontWeight: "700",
  paddingTop: 10,
    
  },
  price: {
    backgroundColor: "rgba(255, 219, 170,1)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    width: 110,
    borderRadius: 30,
    color: "#414141",
    fontSize: 16,
    marginTop:20
}
})
export default Header;
