// React
import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Styles
import {base} from '../../styles/main';

const NewTransactionIcon = () => {
  return (
    <TouchableOpacity
      style={base.NewTransactionIcon}
      activeOpacity={0.8}
      onPress={() => {
        console.log('icon pressed');
      }}>
      <MaterialCommunityIcons
        name={'plus-circle'}
        color={'#34FFC8'}
        size={50}
      />
    </TouchableOpacity>
  );
};

export default NewTransactionIcon;
