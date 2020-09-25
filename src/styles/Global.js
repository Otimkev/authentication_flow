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
    padding: 10,
    borderBottomColor: '#007360',
    borderBottomWidth: StyleSheet.hairlineWidth,
    margin: 5,
    justifyContent: 'center',
    fontSize: 16,
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
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  ButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 70,
  },
  InputBorderBottom: {
    padding: 10,
    borderBottomColor: '#007360',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  Heading: {
    flex: 1,
    fontWeight: 'bold',
    color: '#007360',
    fontSize: 16,
  },
  BlockHeading: {
    backgroundColor: '#007360',
    padding: 10,
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: 2,
    marginTop: 50,
  },
  NormalFlex: {
    marginTop: 30,
  },
});
