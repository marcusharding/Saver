// React
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  //Hide Splash screen on app load.
  useEffect(() => {
    SplashScreen.hide();
  });

  return <Text>WAGWAN</Text>;
};

export default App;
