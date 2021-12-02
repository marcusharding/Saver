// React
import React, {Component} from 'react';
import {View, Text} from 'react-native';

// Partials
import ProfileIcon from '../partials/profileIcon';
import AccountBalance from '../partials/accountBalance';
import NewTransactionIcon from '../partials/newTransactionIcon';
import RecentTransactions from '../partials/recentTransactions';
import NewTransaction from '../modals/newTransaction';

// Styles
import {base, typography, spacing} from '../../styles/main';

class CurrentAccount extends Component {
  constructor(props) {
    super();

    this.state = {
      balance: 0,
      transactions: props.data.saverData.transactions,
      modalVisible: false,
    };
  }

  calculateAccountBalance() {
    const {data} = this.props;
    const {saverData} = data;
    const {transactions} = saverData;
    let balance = this.state.balance;

    transactions.map((transaction, index) => {
      if (transaction.type === 'deposit') {
        balance = balance + transaction.amount;
      } else {
        balance = balance - transaction.amount;
      }

      if (index + 1 === transactions.length) {
        this.setState({
          balance: balance,
        });
      }
    });
  }

  componentDidMount() {
    this.calculateAccountBalance();
  }

  render() {
    const {data, navigation} = this.props;
    const {saverData} = data;
    const {balance, transactions} = this.state;

    return (
      <View style={spacing.flex1}>
        <View style={base.flexContainerRow}>
          <Text style={typography.screenHeading}>Current Account</Text>
          <ProfileIcon />
        </View>
        <AccountBalance balance={balance} overdraft={saverData.overdraft} />
        <RecentTransactions transactions={transactions} />
        <NewTransactionIcon navigation={navigation} />
      </View>
    );
  }
}

export default CurrentAccount;
