// React
import React from 'react';
import {AppRegistry, SafeAreaView} from 'react-native';
import {name as appName} from './app.json';

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

AppRegistry.registerComponent(appName, () => Index);
