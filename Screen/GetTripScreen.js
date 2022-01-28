import { View, Text } from 'react-native';
import React from 'react';
import Header from '../component/getTrip/Header';
import FormGetTrip from '../component/getTrip/FormGetTrip';

const GetTripScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor:"white", flex:1}}>
          <Header navigation={navigation} />
          <FormGetTrip navigation={navigation}/>
    </View>
  );
};

export default GetTripScreen;
