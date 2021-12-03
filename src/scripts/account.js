// React
import {Alert} from 'react-native';

export const calculateAccountBalance = (balance, transactions) => {
  let updatedBalance = balance;

  transactions.map(transaction => {
    if (transaction.type === 'deposit') {
      updatedBalance = parseFloat(updatedBalance) + parseFloat(transaction.amount);
    } else {
      updatedBalance = parseFloat(updatedBalance) - parseFloat(transaction.amount);
    }
  });

  return updatedBalance;
};

export const getUpdatedAccountBalance = (
  type,
  amount,
  balance,
  overDraft,
  goalBalance,
) => {
  let updatedBalance = balance;

  if (type === 'deposit') {
    if (
      checkBalanceAmount(
        parseFloat(updatedBalance) - parseFloat(amount),
        goalBalance,
      )
    ) {
      updatedBalance = parseFloat(updatedBalance) + parseFloat(amount);
    }
  } else {
    if (
      checkBalanceAmount(
        parseFloat(updatedBalance) - parseFloat(amount),
        overDraft,
      )
    ) {
      updatedBalance = parseFloat(updatedBalance) - parseFloat(amount);
    }
  }

  return updatedBalance;
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

const checkBalanceAmount = (updatedBalance, overDraft, goalBalance) => {
  const negativeOverdraft = -Math.abs(overDraft);

  console.log(goalBalance);

  // Check if new balance is > allowed overdraft
  if (negativeOverdraft > updatedBalance) {
    Alert.alert(
      'Sorry you are not allowed to withdraw more than your agreed overdraft',
    );
    return false;
  }

  // Check if new balance is overdrawn
  if (updatedBalance < 0) {
    Alert.alert('You have now entered your agreed overdraft');
  }

  // Check if balance is >= saving goal
  if (updatedBalance >= goalBalance) {
    console.log('you have hit your goal');
    Alert.alert(
      `Congrats you've reached your goal of £${goalBalance} you money saving legend!`,
    );
  }

  return true;
};
