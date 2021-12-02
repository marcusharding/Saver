// React
import React from 'react';
import {View, Text} from 'react-native';

// Styles
import {base, spacing, typography} from '../../styles/main';

const Transaction = ({transaction}) => {
  const ordinal_suffix_of = i => {
    const j = i % 10;
    const k = i % 100;

    if (j === 1 && k !== 11) {
      return i + 'st';
    }
    if (j === 2 && k !== 12) {
      return i + 'nd';
    }
    if (j === 3 && k !== 13) {
      return i + 'rd';
    }
    return i + 'th';
  };

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date = new Date(transaction.date);
  const day = ordinal_suffix_of(date.getDate());
  const month = date.getMonth();
  const formattedDate = day + ' ' + months[month];

  let formattedBalance;
  let balanceModifier = typography.positiveBalance;

  if (transaction.type === 'withdrawel') {
    formattedBalance = '- £' + transaction.amount.toString();
    balanceModifier = typography.negativeBalance;
  } else {
    formattedBalance = '+ £' + transaction.amount.toString();
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
