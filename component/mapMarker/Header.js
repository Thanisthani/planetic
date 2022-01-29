import { View, Text,StyleSheet,TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import { Entypo} from '@expo/vector-icons'; 

const Header = ({navigation}) => {
  return (
      <View style={Styles.wrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
              <Entypo style={Styles.icon} name="cross" size={24} color="#949494" />
              </TouchableOpacity>
          <Text style={Styles.mapText}>Map marker</Text>
          <Text>   </Text>
    </View>
  );
};

const Styles = StyleSheet.create(
    {
        wrapper: {
            paddingTop:StatusBar.currentHeight+5,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            backgroundColor: 'white',
            paddingBottom:5
        },
        mapText: {
            fontSize: 20,
            fontWeight:"bold"
        },
        icon: {
            backgroundColor: "#cfcfcf",
            borderRadius: 50,
            padding:10
        },
    }
)

export default Header;
