import { View, Text,StyleSheet } from 'react-native';
import React from 'react';
import GiveFeedback from '../component/giveFeedback/GiveFeedback';
import Header from '../component/giveFeedback/Header';

const GiveFeedbackScreen = ({navigation}) => {
  return (
      <View style={Styles.container}>
          <Header navigation={ navigation}/>
     <GiveFeedback navigation={ navigation}  />
    </View>
  );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor:"#ffffff"
    }
})

export default GiveFeedbackScreen;
