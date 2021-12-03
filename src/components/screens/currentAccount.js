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
      modalVisible: false,
    };
  }

  setAccountBalance() {
    const {balance} = this.state;
    const {data} = this.props;
    const {saverData} = data;
    const {transactions} = saverData;

    this.setState({
      balance: calculateAccountBalance(balance, transactions),
    });
  }

  setUpdatedAccountBalance(type, amount) {
    const {balance} = this.state;

    this.setState({
      balance: getUpdatedAccountBalance(type, amount, balance),
    });
  }

  setUpdatedTransactions(type, amount, date, description) {
    const {transactions} = this.state;
    // this.setState({
    //   transactions: getUpdatedTransactions(
    //     type,
    //     amount,
    //     date,
    //     description,
    //     transactions,
    //   ),
    // });

    getUpdatedTransactions(type, amount, date, description, transactions);
  }

  componentDidMount() {
    const {navigation} = this.props;

    this.setAccountBalance();
    this.screenNavigated = navigation.addListener('focus', () => {
      const {route} = this.props;
      const {params} = route;

      if (params) {
        const {type, amount, date, description} = params;
        this.setUpdatedAccountBalance(type, amount);
        this.setUpdatedTransactions(type, amount, date, description);
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
      <View style={spacing.flex1}>
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
