// React
import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CommonActions} from '@react-navigation/native';

// Styles
import {base} from '../../styles/main';

const NewTransactionIcon = ({navigation}) => {
  return (
    <TouchableOpacity
      style={base.NewTransactionIcon}
      activeOpacity={0.8}
      onPress={() => {
        navigation.dispatch(
          CommonActions.navigate({
            name: 'NewTransactionModal',
          }),
        );
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
