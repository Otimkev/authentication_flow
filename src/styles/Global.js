import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    width: 340,
    height: 45,
    borderColor: '#7cb63b',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
    justifyContent: 'center',
  },
  TextInput: {
    paddingHorizontal: 10,
    color: '#026062',
    fontWeight: 'normal',
    fontSize: 20,
  },
  Button: {
    width: '60%',
    backgroundColor: '#7cb63b',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  ButtonText: {
    fontSize: 24,
    color: '#fff',
  },
});
