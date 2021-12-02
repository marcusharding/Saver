import {StyleSheet} from 'react-native';

const appTheme = {
  colors: {
    primary: '',
    background: '#121212',
    card: '#111111',
    text: '#ffffff',
    notification: 'rgb(255, 69, 58)',
  },
};

const base = StyleSheet.create({
  flexContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  flexContainerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  safeAreaView: {
    flex: 1,
    position: 'relative',
    height: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    backgroundColor: '#121212',
  },

  profileIcon: {
    marginLeft: 'auto',
    borderRadius: 100,
    marginTop: 15,
    width: 35,
    height: 35,
  },

  NewTransactionIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: 20,
  },

  buttonContainer: {
    elevation: 8,
    width: '100%',
    backgroundColor: '#03DAC6',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});

const typography = StyleSheet.create({
  screenHeading: {
    marginTop: 10,
    color: '#ffffff',
    fontSize: 25,
  },

  balance: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#ffffff',
    marginBottom: 20,
  },

  balanceNumber: {
    fontSize: 20,
    marginBottom: 20,
  },

  positiveBalance: {
    color: '#34FFC8',
  },

  negativeBalance: {
    color: '#FF0000',
  },

  transactionDescription: {
    fontSize: 15,
    marginBottom: 5,
    color: '#FAF9F6',
  },

  overDraft: {
    fontSize: 16,
  },

  buttonText: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

const partials = StyleSheet.create({
  accountBalance: {
    marginTop: 50,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: '#a9a9a9',
    borderTopColor: '#a9a9a9',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});

const spacing = StyleSheet.create({
  flex1: {
    flex: 1,
  },

  marginBottom10: {
    marginBottom: 10,
  },

  marginBottom20: {
    marginBottom: 20,
  },

  marginBottom50: {
    marginBottom: 50,
  },

  marginBottom100: {
    marginBottom: 100,
  },

  marginTop20: {
    marginTop: 20,
  },
});

const form = StyleSheet.create({
  input: {
    width: '100%',
    marginBottom: 25,
    paddingBottom: 15,
    alignSelf: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 25,
    paddingTop: 15,
    color: '#EFEFEF',
  },

  inputText: {
    color: '#D1D1D1',
    marginTop: 25,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },

  inputTextSpan: {
    color: '#34FFC8',
  },
});

export {base, typography, partials, spacing, appTheme, form};
