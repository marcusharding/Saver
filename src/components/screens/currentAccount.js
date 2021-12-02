// React
import React, {Component} from 'react';
import {View, Text} from 'react-native';

// Partials
import ProfileIcon from '../partials/profileIcon';
import AccountBalance from '../partials/accountBalance';
import NewTransactionIcon from '../partials/newTransactionIcon';
import RecentTransactions from '../partials/recentTransactions';

// Styles
import {base, typography, spacing} from '../../styles/main';

class CurrentAccount extends Component {
  constructor() {
    super();

    this.setState = {
      accountBalance: null,
    };
  }

  calculateAccountBalance() {
    const {data} = this.props;
    const {saverData} = data;
    console.log(saverData);
  }

  componentDidMount() {
    this.calculateAccountBalance();
  }

  render() {
    const {data} = this.props;
    const {saverData} = data;

    return (
      <View style={spacing.flex1}>
        <View style={base.flexContainerRow}>
          <Text style={typography.screenHeading}>Current Account</Text>
          <ProfileIcon />
        </View>
        <AccountBalance
          balance={saverData.balance}
          overdraft={saverData.overdraft}
        />
        <RecentTransactions />
        <NewTransactionIcon />
      </View>
    );
  }
}

export default CurrentAccount;
