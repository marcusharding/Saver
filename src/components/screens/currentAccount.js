// React
import React, {Component} from 'react';
import {View, Text} from 'react-native';

// Partials
import ProfileIcon from '../partials/profileIcon';
import AccountBalance from '../partials/accountBalance';

// Styles
import {base, typography} from '../../styles/main';

class CurrentAccount extends Component {
  constructor() {
    super();

    this.setState = {};
  }

  render() {
    const {data} = this.props;
    const {saverData} = data;

    return (
      <View>
        <View style={base.flexContainerRow}>
          <Text style={typography.screenHeading}>Current Account</Text>
          <ProfileIcon />
        </View>
        <AccountBalance
          balance={saverData.balance}
          overdraft={saverData.overdraft}
        />
      </View>
    );
  }
}

export default CurrentAccount;
