// React
import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';

// Styles
import {base, typography, form, spacing, colors} from '../../styles/main';

// Partials
import GoBackIcon from '../partials/goBackIcon';
import DropDownSelector from '../partials/dropDownPicker';
import {SafeAreaView} from 'react-native-safe-area-context';

// Scripts
import {typeCheckNewTransaction} from '../../scripts/account';

const NewTransaction = props => {
  const [type, setType] = useState(null);
  const [amount, setAmount] = useState(null);
  const [date, setDate] = useState(null);
  const [description, setDescription] = useState(null);
  const [types, setTypes] = useState([
    {label: 'Deposit', value: 'deposit'},
    {label: 'Withdrawel', value: 'withdrawel'},
  ]);
  const {navigation} = props;

  const onPressAddTransaction = () => {
    if (type && amount && date && description) {
      if (typeCheckNewTransaction(amount, date, description)) {
        navigation.dispatch(
          CommonActions.navigate({
            name: 'CurrentAccountScreen',
            params: {
              type: type,
              amount: amount,
              date: date,
              description: description,
            },
          }),
        );
      }
    } else {
      Alert.alert('Please ensure all fields are filled in');
    }
  };

  return (
    <SafeAreaView style={[spacing.flex1, base.iosMargin]}>
      <View style={[base.flexContainerRow, spacing.marginBottom50]}>
        <Text style={typography.screenHeading}>New Transaction</Text>
        <GoBackIcon navigation={navigation} />
      </View>
      <Text
        style={[spacing.marginBottom10, typography.overDraft, colors.darkGrey]}>
        Transaction type
      </Text>
      <View style={spacing.marginBottom20}>
        <DropDownSelector
          types={types}
          setTypes={setTypes}
          setType={setType}
          type={type}
        />
      </View>
      <ScrollView>
        <Text
          style={[
            spacing.marginBottom10,
            typography.overDraft,
            colors.darkGrey,
          ]}>
          Amount
        </Text>
        <TextInput
          style={form.input}
          placeholder={'£'}
          value={amount}
          onChangeText={value => {
            setAmount(value);
          }}
          placeholderTextColor="#EFEFEF"
        />
        <Text
          style={[
            spacing.marginBottom10,
            typography.overDraft,
            colors.darkGrey,
          ]}>
          Date
        </Text>
        <TextInput
          style={form.input}
          placeholder={'yyyy-mm-dd'}
          value={date}
          onChangeText={value => {
            setDate(value);
          }}
          placeholderTextColor="#EFEFEF"
        />
        <Text style={[spacing.marginBottom10, typography.overDraft, colors.darkGrey]}>
          Short description
        </Text>
        <TextInput
          style={form.input}
          placeholder={'Add text'}
          value={description}
          onChangeText={value => {
            setDescription(value);
          }}
          placeholderTextColor="#EFEFEF"
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => onPressAddTransaction()}
          style={[
            base.buttonContainer,
            spacing.marginTop20,
            spacing.marginBottom50,
          ]}>
          <Text style={typography.buttonText}>Add Transaction</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewTransaction;
