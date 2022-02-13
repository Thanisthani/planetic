import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import WelcomeScreen from './Screen/WelcomeScreen'
import SignInScreen from './Screen/SignInScreen'
import SignUpScreen from './Screen/SignUpScreen'
import HomeScreen from './Screen/HomeScreen'
import DestinationScreen from './Screen/DestinationScreen';
import TripPlanScreen from './Screen/TripPlanScreen';
import GetTripScreen from './Screen/GetTripScreen';
import PlaceDetailsScreen from './Screen/PlaceDetailsScreen';
import MapMarkerScreen from './Screen/MapMarkerScreen'
import GiveFeedbackScreen from "./Screen/GiveFeedbackScreen"
import BottomNavigation from './Screen/BottomNavigation';
import PostDetailScreen from "./Screen/PostDetailScreen"
import AddPostScreen from './Screen/AddPostScreen'
import FollowerProfileScreen from './Screen/FollowerProfileScreen'
import ProfileScreen from './Screen/ProfileScreen'


const Stack = createNativeStackNavigator()


export const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='Bottom'
            screenOptions={{
                headerShown: false
              }}>
    
            <Stack.Screen name="Bottom" component={BottomNavigation} />
            <Stack.Screen name="DestinationScreen" component={DestinationScreen} />
            <Stack.Screen name="TripPlanScreen" component={TripPlanScreen} />
            <Stack.Screen name="GetTripScreen" component={GetTripScreen} />
            <Stack.Screen name="PlaceDetailsScreen" component={PlaceDetailsScreen} />
            <Stack.Screen name="MapMarkerScreen" component={MapMarkerScreen} />
            <Stack.Screen name="GiveFeedbackScreen" component={GiveFeedbackScreen} />
            <Stack.Screen name="PostDetailScreen" component={PostDetailScreen} />
            <Stack.Screen name="AddPostScreen" component={AddPostScreen} />
            <Stack.Screen name="FollowerProfileScreen" component={FollowerProfileScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />

        </Stack.Navigator>
    </NavigationContainer>
)

export const SignedOutStack = () =>
(
    <NavigationContainer>
    <Stack.Navigator
        initialRouteName='WelcomeScreen'
        screenOptions={{
            headerShown: false
          }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        
       
    </Stack.Navigator>
</NavigationContainer>

    )

