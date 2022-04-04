import React,{useEffect,useState} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PlaceOverview from './PlaceOverview';
import PlacePhoto from './PlacePhoto';
import Feedback from './Feedback';

const Tab = createMaterialTopTabNavigator();

const TopTabPlace = ({type,place_name,phone,open,lat,long,about,destination}) => {
    const tabOptions={
        activeTintColor: 'white',
        inactiveTintColor: '#637175',
        showIcon: true,
        pressColor: '#9BC9E2',
        scrollEnabled: true,
        tabStyle: {
          borderRadius: 0,
          margin: 0,
          alignContent: 'center',
          width:90
        },
        
        indicatorStyle: {
          borderColor: "#19bfbc",
          borderWidth:0,
          height: 40,
          borderRadius: 20,
          marginBottom: 10,
          marginTop: 10,
          marginLeft:15,
          width: 80,
          alignContent: 'center',
          backgroundColor:"#00ebe8"
        },
    
        style: {
          backgroundColor: 'white',
          height: 60,
          paddingLeft: 10,
          margin: 0,
          width: '100%',
          alignContent: 'center',
          justifyContent: 'center',
        },
    
        labelStyle: {
          fontSize: 14,
          justifyContent: 'center',
          alignContent: 'center',
          margin: 0,
          padding: 0,
          fontWeight:"bold"
        },
        
    
    }

  return (
      <Tab.Navigator initialRouteName="Overview"
        //   tabBarOptions={tabOptions}
      >
      <Tab.Screen name="Overview" initialParams={{ type:type,phone:phone,open:open,lat:lat,long:long,about:about ,destination:destination}}
        component={PlaceOverview} />
      <Tab.Screen name="Photo"
        initialParams={ {place_name:place_name}} component={PlacePhoto} />
      <Tab.Screen name="Review" 
          initialParams={ {place_name:place_name}} component={Feedback} />
      </Tab.Navigator>
  );
};

export default TopTabPlace;
