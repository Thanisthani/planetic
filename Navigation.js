import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import WelcomeScreen from './Screen/WelcomeScreen'
import SignInScreen from './Screen/SignInScreen'
import SignUpScreen from './Screen/SignUpScreen'
import HomeScreen from './Screen/HomeScreen'


const Stack = createNativeStackNavigator()


const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='HomeScreen'
            screenOptions={{
                headerShown: false
              }}>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
           
        </Stack.Navigator>
    </NavigationContainer>
)

export default SignedInStack