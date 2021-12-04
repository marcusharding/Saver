// React
import React, {Component} from 'react';
import {View, Text, Alert} from 'react-native';

// Partials
import ProfileIcon from '../partials/profileIcon';
import AccountBalance from '../partials/accountBalance';
import NewTransactionIcon from '../partials/newTransactionIcon';
import RecentTransactions from '../partials/recentTransactions';

// Styles
import {base, typography, spacing} from '../../styles/main';

// Scripts
import {
  calculateAccountBalance,
  getUpdatedTransactions,
  getUpdatedAccountBalance,
} from '../../scripts/account';

class CurrentAccount extends Component {
  constructor(props) {
    super();

    this.state = {
      balance: 0,
      transactions: props.data.saverData.transactions,
    };
  }

  // Set initial account balance
  setAccountBalance() {
    const {balance} = this.state;
    const {data} = this.props;
    const {saverData} = data;
    const {transactions} = saverData;

    this.setState({
      balance: calculateAccountBalance(balance, transactions),
    });
  }

  // Set the updated account balance after a transaction
  setUpdatedAccountBalance(type, amount, date, description) {
    const {balance, transactions} = this.state;
    const {data} = this.props;
    const {saverData} = data;
    const {overdraft, goalBalance} = saverData;
    const updatedBalance = getUpdatedAccountBalance(
      type,
      amount,
      balance,
      overdraft,
      goalBalance,
    );

    if (updatedBalance) {
      this.setState({
        balance: updatedBalance,
      });
      getUpdatedTransactions(type, amount, date, description, transactions);
      Alert.alert(
        'Transaction added:',
        `${type} £${amount} ${date} ${description}`,
      );
    }
  }

  componentDidMount() {
    const {navigation} = this.props;

    this.setAccountBalance();
    this.screenNavigated = navigation.addListener('focus', () => {
      const {route} = this.props;
      const {params} = route;

      if (params) {
        const {type, amount, date, description} = params;
        if (type && amount && date && description) {
          this.setUpdatedAccountBalance(type, amount, date, description);
          navigation.setParams({
            type: null,
            amount: null,
            date: null,
            description: null,
          });
        }
      }
    });
  }

  componentWillUnmount() {
    this.screenNavigated();
  }

  render() {
    const {data, navigation} = this.props;
    const {saverData} = data;
    const {balance, transactions} = this.state;

    return (
      <View style={[spacing.flex1, base.iosMargin]}>
        <View style={base.flexContainerRow}>
          <Text style={typography.screenHeading}>Current Account</Text>
          <ProfileIcon />
        </View>
        <AccountBalance balance={balance} overdraft={saverData.overdraft} />
        <RecentTransactions transactions={transactions} />
        <NewTransactionIcon
          addNewTransaction={this.addNewTransaction}
          navigation={navigation}
        />
      </View>
    );
  }
}

export default CurrentAccount;
