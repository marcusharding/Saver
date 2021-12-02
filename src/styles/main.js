import {StyleSheet} from 'react-native';

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
    width: 35,
    height: 35,
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
    color: '#34FFC8',
    fontSize: 20,
    marginBottom: 20,
  },

  overDraft: {
    fontSize: 16,
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

export {base, typography, partials};
