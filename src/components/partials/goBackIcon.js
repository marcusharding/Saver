// React
import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Styles
import {spacing} from '../../styles/main';

const GoBackIcon = ({navigation}) => {
  return (
    <TouchableOpacity style={spacing.marginTop20} activeOpacity={0.8}>
      <MaterialCommunityIcons
        name={'close'}
        size={35}
        onPress={() => navigation.goBack()}
      />
    </TouchableOpacity>
  );
};

export default GoBackIcon;
