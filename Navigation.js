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

const Stack = createNativeStackNavigator()


export const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='HomeScreen'
            screenOptions={{
                headerShown: false
              }}>
    
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DestinationScreen" component={DestinationScreen} />
            <Stack.Screen name="TripPlanScreen" component={TripPlanScreen} />
            <Stack.Screen name="GetTripScreen" component={GetTripScreen} />
           
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

