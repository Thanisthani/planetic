import { View } from 'react-native';
import React from 'react';
import Header from '../component/getTrip/Header';
import FormGetTrip from '../component/getTrip/FormGetTrip';
import { ScrollView } from 'react-native-gesture-handler';

const GetTripScreen = ({navigation}) => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView>
        <Header navigation={navigation} />
        <FormGetTrip navigation={navigation} />
      </ScrollView>
          
    </View>
  );
};

export default GetTripScreen;
