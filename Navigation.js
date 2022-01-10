import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import WelcomeScreen from './Screen/WelcomeScreen'
import SignInScreen from './Screen/SignInScreen'
import SignUpScreen from './Screen/SignUpScreen'


const Stack = createNativeStackNavigator()


const SignedInStack = () => (
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

export default SignedInStack