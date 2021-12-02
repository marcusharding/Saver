// React
import React, {useState, useEffect} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';

// Styles
import {base, typography, form, spacing} from '../../styles/main';

// Partials
import GoBackIcon from '../partials/goBackIcon';
import DropDownSelector from '../partials/dropDownPicker';
import {SafeAreaView} from 'react-native-safe-area-context';

const NewTransaction = (props, {modalVisible}) => {
  const [amount, setAmount] = useState('0');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState(null);
  const [types, setTypes] = useState([
    {label: 'Deposit', value: 'deposit'},
    {label: 'Withdrawel', value: 'withdrawel'},
  ]);
  const {navigation} = props;

  return (
    <SafeAreaView style={spacing.flex1}>
      <View style={[base.flexContainerRow, spacing.marginBottom50]}>
        <Text style={typography.screenHeading}>New Transaction</Text>
        <GoBackIcon navigation={navigation} />
      </View>
      <Text style={[spacing.marginBottom20, typography.overDraft]}>
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
        <Text style={[spacing.marginBottom20, typography.overDraft]}>
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
        <Text style={[spacing.marginBottom20, typography.overDraft]}>Date</Text>
        <TextInput
          style={form.input}
          placeholder={'2021-09-30'}
          value={date}
          onChangeText={value => {
            setDate(value);
          }}
          placeholderTextColor="#EFEFEF"
        />
        <Text style={[spacing.marginBottom20, typography.overDraft]}>
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
          onPress={() => console.log('button pressed')}
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
