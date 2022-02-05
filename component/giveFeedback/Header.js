import { View, Text,StyleSheet,StatusBar,TouchableOpacity } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';

const Header = ({navigation}) => {
  return (
    <View>
          <View style={Styles.headingWrapper}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
              <Entypo style={Styles.icon} name="cross" size={24} color="#949494" />
              </TouchableOpacity>
              
              <Text style={Styles.heading}>Give feedback</Text>
              <Text>    </Text>
          </View>
    </View>
  );
};

const Styles = StyleSheet.create(
    {

        headingWrapper: {
            paddingTop: StatusBar.currentHeight+10,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal:20
        },
        icon: {
            backgroundColor: "#cfcfcf",
            borderRadius: 50,
            padding:10
        },
        heading: {
            fontSize: 25,
            fontWeight: "bold",
            
        }
    }
)

export default Header;
