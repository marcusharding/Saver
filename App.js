// React
import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

// Screens
import CurrentAccount from './src/components/screens/currentAccount';

// Partials
import PreLoader from './src/components/partials/preLoader';

// Scripts
import {fetchData} from './src/scripts/data';

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
    return <CurrentAccount data={data} />;
  }

  return null;
};

export default App;
