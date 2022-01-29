import { View, Text } from 'react-native';
import React from 'react';
import Header from '../component/mapMarker/Header';
import TopTabMap from '../component/mapMarker/TopTabMap';

const MapMarkerScreen = ({navigation}) => {
  return (
      <>
      <Header navigation={navigation} />
      <TopTabMap />
      </>
  );
};

export default MapMarkerScreen;
