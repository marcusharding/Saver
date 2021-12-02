// React
import React, {useState, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

// Screens
import CurrentAccount from './src/components/screens/currentAccount';

// Partials
import PreLoader from './src/components/partials/preLoader';

// Styles
import {appTheme} from './src/styles/main';

// Scripts
import {fetchData} from './src/scripts/data';

// Navigators
const Stack = createNativeStackNavigator();

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    SplashScreen.hide();
    fetchData('https://jsonkeeper.com/b/GASF').then(response => {
      setData(response);
    }, setInitializing(false));
  }, [setInitializing]);

  if (initializing) {
    return <PreLoader />;
  }

  if (data) {
    return (
      <NavigationContainer options={{headerShown: false}} theme={appTheme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="CurrentAccountScreen">
            {props => <CurrentAccount data={data} {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return null;
};

export default App;
