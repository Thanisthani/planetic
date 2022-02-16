import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileGuide from './ProfileGuide';
import ProfileTrip from './ProfileTrip';

const Tab = createMaterialTopTabNavigator();

const TopTabprofile = () => {
   

  return (
    <Tab.Navigator initialRouteName="Trip"
        //   tabBarOptions={tabOptions}
        screenOptions={{
          tabBarLabelStyle: { fontSize: 15 ,fontWeight:"bold"},
          // tabBarItemStyle: { width: 100 },
          tabBarStyle: { backgroundColor: '#baf2f6' },
          tabBarIndicatorStyle: {
            backgroundColor: '#1bc5d1',
        height:3  }
        }}
      >
      <Tab.Screen name="Trip"
            //   initialParams={{ followerId:followerId }}
              component={ProfileTrip} />
      <Tab.Screen name="Guide"
            // initialParams={{ followerId:followerId }}
              component={ProfileGuide} />
          
      </Tab.Navigator>
  )
}

export default TopTabprofile