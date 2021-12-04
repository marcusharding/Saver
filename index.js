// React
import React from 'react';
import {AppRegistry, SafeAreaView} from 'react-native';
import {name as appName} from './app.json';
import {registerRootComponent} from 'expo';

// Screens
import App from './App';

// Styles
import {base} from './src/styles/main';

const Index = () => {
  return (
    <SafeAreaView style={base.safeAreaView}>
      <App />
    </SafeAreaView>
  );
};

// Uncomment for running expo start
// registerRootComponent(Index);

// Uncomment for running yarn run android|ios
AppRegistry.registerComponent(appName, () => Index);
