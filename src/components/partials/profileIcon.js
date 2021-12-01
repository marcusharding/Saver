// React
import React from 'react';
import {View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Styles
import {base} from '../../styles/main';

const ProfileIcon = () => {
  return (
    <View>
      <MaterialCommunityIcons
        name={'account-circle'}
        color={'#808080'}
        size={35}
        style={base.profileIcon}
      />
    </View>
  );
};

export default ProfileIcon;
