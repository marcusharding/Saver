// React
import React, {useState, useEffect} from 'react';
import {Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BackgroundColor from 'react-native-background-color';

// Screens
import CurrentAccount from './src/components/screens/currentAccount';
import NewTransaction from './src/components/modals/newTransaction';

// Partials
import PreLoader from './src/components/partials/preLoader';

// Styles
import {appTheme} from './src/styles/main';

// Scripts
import {fetchData} from './src/scripts/data';
import {addNewTransaction} from './src/scripts/account';

// Navigators
const Stack = createNativeStackNavigator();

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    SplashScreen.hide();
    if (Platform.OS === 'android') {
      BackgroundColor.setColor('#121212');
    }
    fetchData('https://jsonkeeper.com/b/YTHA').then(response => {
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
          <Stack.Screen name="NewTransactionModal">
            {props => (
              <NewTransaction
                addNewTransaction={addNewTransaction}
                {...props}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return null;
};

export default App;
