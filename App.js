import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthNavigation from './AuthNavigation';
import SignedInStack from './Navigation';
import SignInScreen from './Screen/SignInScreen';
import SignUpScreen from './Screen/SignUpScreen';
import WelcomeScreen from './Screen/WelcomeScreen';

export default function App() {
  return (
    // <WelcomeScreen />
    // <SignInScreen />
    // <SignUpScreen />
    // <SignedInStack />
    <AuthNavigation />
  );
}

const styles = StyleSheet.create({
 
});
