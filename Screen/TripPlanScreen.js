import { View, Text } from 'react-native';
import React, { useState , useEffect} from 'react';
import Header from '../component/tripPlan/Header';
import TopTabNavigation from '../component/tripPlan/TopTabNavigation';
import { useRoute } from '@react-navigation/native'



const TripPlanScreen = ({ navigation }) => {

 
    
    const route = useRoute();
    const { place_id ,imgURL,place_name,budget} = route.params;

    

  return (
      <>
          <Header imgURL={imgURL} placeName={place_name} budget={budget} navigation={navigation} />
          <TopTabNavigation placeId={place_id} />
    </>
          
    
  );
};

export default TripPlanScreen;
