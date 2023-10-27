import React from 'react';
import {SafeAreaView} from 'react-native';
import LoginScreen from './src/screens/Auth/loginScreen';
import SignUpScreen from './src/screens/Auth/signUpScreen';

const App = () => (
  <SafeAreaView style={{flex:1}} >
    {/* <LoginScreen /> */}
    <SignUpScreen />
  </SafeAreaView>
);

export default App;
