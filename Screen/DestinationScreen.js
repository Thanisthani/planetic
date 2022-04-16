import { View, StyleSheet } from 'react-native';
import React from 'react';
import DestinationList from '../component/destination/DestinationList';

const DestinationScreen = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <DestinationList navigation={ navigation}/>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex:1
  }
})

export default DestinationScreen;
