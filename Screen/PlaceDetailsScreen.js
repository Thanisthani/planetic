import { View, Text } from 'react-native';
import React from 'react';
import Header from '../component/PlaceDetails/Header';
import TopTabPlace from '../component/PlaceDetails/TopTabPlace';

const PlaceDetailsScreen = ({navigation}) => {
  return (
    <>
      <Header navigation={navigation} />
      <TopTabPlace />
    </>
  );
};

export default PlaceDetailsScreen;
