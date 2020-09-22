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
    borderColor: '#007360',
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
    backgroundColor: '#007360',
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
  Row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 100,
  },
});
