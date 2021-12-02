// React
import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

// Styles
import {typography, spacing} from '../../styles/main';

// Partials
import Transaction from './transaction';

const RecentTransactions = ({transactions}) => {
  transactions = transactions.map((transaction, index) => {
    return <Transaction key={index} transaction={transaction} />;
  });

  return (
    <View style={spacing.marginBottom50}>
      <Text style={typography.balance}>Recent Transactions</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {transactions}
      </ScrollView>
    </View>
  );
};

export default RecentTransactions;
