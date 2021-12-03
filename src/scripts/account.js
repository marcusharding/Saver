// React
import {Alert} from 'react-native';

export const calculateAccountBalance = (balance, transactions) => {
  let currentBalance = balance;

  transactions.map(transaction => {
    if (transaction.type === 'deposit') {
      currentBalance = parseFloat(currentBalance) + parseFloat(transaction.amount);
    } else {
      currentBalance = parseFloat(currentBalance) - parseFloat(transaction.amount);
    }
  });

  return currentBalance;
};

export const getUpdatedAccountBalance = (type, amount, balance) => {
  let currentBalance = balance;

  if (type === 'deposit') {
    currentBalance = parseFloat(currentBalance) + parseFloat(amount);
  } else {
    currentBalance = parseFloat(currentBalance) - parseFloat(amount);
  }

  return currentBalance;
};

export const typeCheckNewTransaction = (amount, date, description) => {
  if (isNaN(amount)) {
    Alert.alert('Amount must be a number');
    return false;
  }

  if (!validateDate(date)) {
    Alert.alert('Date must be in the following format: "yyyy-mm-dd"');
    return false;
  }

  if (!isNaN(description)) {
    Alert.alert('Description must be a string of text');
    return false;
  }

  return true;
};

export const getUpdatedTransactions = (
  type,
  amount,
  date,
  description,
  transactions,
) => {
  const newTransaction = {
    type: type,
    amount: amount,
    date: date,
    description: description,
  };

  return transactions.push(newTransaction);
};

const validateDate = date => {
  const regEx = /^\d{4}-\d{2}-\d{2}$/;
  const d = new Date(date);
  const dNum = d.getTime();

  if (!date.match(regEx)) {
    return false;
  }

  if (!dNum && dNum !== 0) {
    return false;
  }

  return d.toISOString().slice(0, 10) === date;
};
