import { View, Text , StyleSheet,StatusBar,TouchableOpacity} from 'react-native';
import React from 'react';
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons'; 

const Header = ({navigation}) => {
  return (
      <View style={Styles.container}>
          {/* <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons style={{ paddingTop: 10 }} name="chevron-back" size={30} color="#4c4c4b" />
          </TouchableOpacity> */}

      <Text style={Styles.heading}>My Trip Plan</Text>
    </View>
  );
};

const Styles = StyleSheet.create(
    {
        container: {
            marginTop: StatusBar.currentHeight,
            marginHorizontal:20
        },
        heading: {
            paddingTop:20,
            fontSize: 28,
            fontWeight:'600',
            color: "black",
            fontWeight: "bold",
            
            // color:"#4c4c4b"
            
        },

    }
)

export default Header;
