import { View, Text } from 'react-native';
import React from 'react';
import DestinationList from '../component/destination/DestinationList';

const DestinationScreen = ({navigation}) => {
  return (
    <View>
      <DestinationList navigation={ navigation}/>
    </View>
  );
};

export default DestinationScreen;
