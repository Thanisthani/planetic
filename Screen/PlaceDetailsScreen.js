import { View, Text } from 'react-native';
import React from 'react';
import Header from '../component/PlaceDetails/Header';

const PlaceDetailsScreen = ({navigation}) => {
  return (
    <View>
     <Header navigation={navigation}/>
    </View>
  );
};

export default PlaceDetailsScreen;
