// React
import React from 'react';
import {View, ActivityIndicator} from 'react-native';

// Styles
import {base} from '../../styles/main';

const PreLoader = () => {
  return (
    <View style={base.flexContainer}>
      <ActivityIndicator size="large" color="#34FFC8" />
    </View>
  );
};

export default PreLoader;
