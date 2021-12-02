// React
import React from 'react';
import {View, Text} from 'react-native';

// Styles
import {base, partials, typography} from '../../styles/main';

const RecentTransactions = () => {
  return (
    <View>
      <Text style={typography.balance}>Recent Transactions</Text>
    </View>
  );
};

export default RecentTransactions;
