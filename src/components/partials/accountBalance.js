// React
import React from 'react';
import {View, Text} from 'react-native';

// Styles
import {base, partials, typography} from '../../styles/main';

const AccountBalance = ({balance, overdraft}) => {
  return (
    <View style={partials.accountBalance}>
      <View style={base.flexContainerRow}>
        <Text style={typography.balance}>Balance</Text>
        <Text style={typography.balanceNumber}>£{balance}</Text>
      </View>
      <View style={base.flexContainerRow}>
        <Text style={typography.overDraft}>Overdraft</Text>
        <Text style={typography.overDraft}>£{overdraft}</Text>
      </View>
    </View>
  );
};

export default AccountBalance;