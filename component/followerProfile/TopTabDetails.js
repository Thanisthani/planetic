import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import FollowerTrip from './FollowerTrip';
import FollowerPost from './FollowerPost'
import { useRoute } from '@react-navigation/native'


const Tab = createMaterialTopTabNavigator();

const TopTabDetails = ({ navigation }) => {
    const route = useRoute();
    const { followerId } = route.params;

  return (
    <Tab.Navigator initialRouteName="Trip"
        //   tabBarOptions={tabOptions}
      >
      <Tab.Screen name="Trip"
              initialParams={{ followerId:followerId }}
              component={FollowerTrip} />
      <Tab.Screen name="Guide"
            initialParams={{ followerId:followerId }}
              component={FollowerPost} />
          
      </Tab.Navigator>
  )
}

export default TopTabDetails