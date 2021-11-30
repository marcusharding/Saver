// React
import React from 'react';
import {AppRegistry, SafeAreaView} from 'react-native';
import {name as appName} from './app.json';

// Screens
import App from './App';

const Index = () => {
  return (
    <SafeAreaView>
      <App />
    </SafeAreaView>
  );
};

AppRegistry.registerComponent(appName, () => Index);
