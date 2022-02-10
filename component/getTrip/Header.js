import { View, Text,StyleSheet, StatusBar } from 'react-native';
import React from 'react';

const Header = ({navigation}) => {
  return (
    <View>
      
          <View style={Styles.headingWrapper}>
              <Text style={Styles.heading}>Plan a new trip</Text>
              
          </View>
    </View>
  );
};

const Styles = StyleSheet.create(
    {

        headingWrapper: {
            paddingTop: StatusBar.currentHeight+10,
            // flexDirection: "row",
            justifyContent: "center",
            alignItems:"center",
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
