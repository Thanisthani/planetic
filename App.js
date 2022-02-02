import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthNavigation from './AuthNavigation';
import SignedInStack from './Navigation';
import SignInScreen from './Screen/SignInScreen';
import SignUpScreen from './Screen/SignUpScreen';
import WelcomeScreen from './Screen/WelcomeScreen';
import { LogBox } from 'react-native';
import { store } from './Redux/store'
import { Provider } from 'react-redux';

// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by messageLogBox.ignoreAllLogs();

export default function App() {
  // console.disableYellowBox = true;
  return (
    // <WelcomeScreen />
    // <SignInScreen />
    // <SignUpScreen />
    // <SignedInStack />
    <Provider store={store}>
      <AuthNavigation />
      
    </Provider>
    
  );
}

const styles = StyleSheet.create({
 
});
