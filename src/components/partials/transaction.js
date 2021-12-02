// React
import React from 'react';
import {View, Text} from 'react-native';

// Styles
import {base, spacing, typography} from '../../styles/main';

const Transaction = ({transaction}) => {
  const formattedDate = transaction.date;
  let formattedBalance;
  let balanceModifier = typography.positiveBalance;

  if (transaction.type === 'withdrawel') {
    formattedBalance = -transaction.amount;
    balanceModifier = typography.negativeBalance;
  } else {
    formattedBalance = '£' + transaction.amount.toString();
  }

  return (
    <View style={[base.flexContainerRow, spacing.marginBottom20]}>
      <View>
        <Text style={typography.transactionDescription}>
          {transaction.description}
        </Text>
        <Text>{formattedDate}</Text>
      </View>
      <Text style={balanceModifier}>{formattedBalance}</Text>
    </View>
  );
};

export default Transaction;
