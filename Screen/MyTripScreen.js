import { View, Text ,StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Header from '../component/myTrip/Header';
import MyTrip from '../component/myTrip/MyTrip';
import PastTrip from '../component/myTrip/PastTrip';

const MyTripScreen = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <Header navigation={navigation} />
      <ScrollView>
        <MyTrip navigation={navigation} />
        <PastTrip navigation={navigation} />
      </ScrollView>
      
    </View>
  );
};

const Styles = StyleSheet.create(
  {
    container:{flex: 1,
    backgroundColor:"white"}
  }
)
export default MyTripScreen;
