import { View, Text } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native'

const TripPlanlist = ({ navigation,day }) => {
    // const route = useRoute();
    // const { day } = route.params;


  return (
    <View>
          <Text>Trip plan list Day { day}</Text>
    </View>
  );
};

export default TripPlanlist;
