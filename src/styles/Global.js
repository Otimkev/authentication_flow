import {StyleSheet} from 'react-native';
import {primary_color, body_color} from '../styles/color';

export const globalStyles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: body_color,
  },
  inputContainer: {
    height: 45,
    width: 350,
    fontSize: 18,
    padding: 5,
    borderBottomColor: primary_color,
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  TextInput: {
    paddingHorizontal: 10,
    color: '#696969',
    fontWeight: 'normal',
    fontSize: 20,
  },
  Button: {
    width: '90%',
    backgroundColor: primary_color,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  ButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  ButtonRow: {
    width: '47%',
    backgroundColor: primary_color,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Heading: {
    flex: 1,
    width: '60%',
    borderRadius: 10,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    color: primary_color,
    fontSize: 18,
  },
  BlockHeading: {
    backgroundColor: primary_color,
    padding: 10,
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: 2,
    marginTop: 50,
    marginBottom: 30,
  },
  NormalFlex: {
    marginTop: 30,
  },
  Card: {
    width: '100%',
    backgroundColor: primary_color,
    borderRadius: 10,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  CardText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  DirectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: 'normal',
    color: primary_color,
    fontSize: 20,
    width: 170,
    textTransform: 'capitalize',
  },
  testContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  testInput: {
    height: 45,
    width: 350,
    borderColor: primary_color,
    backgroundColor: '#fff',
    padding: 10,
    borderBottomColor: primary_color,
    borderBottomWidth: StyleSheet.hairlineWidth,
    margin: 5,
    // justifyContent: 'center',
    fontSize: 16,
  },
  mainContent: {
    marginBottom: 3,
    marginTop: 1,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderColor: primary_color,
    backgroundColor: '#fff',
  },
  loader: {
    flex: 1,
  },
  pickerContainer: {
    // height: 45,
    // width: 350,
    //fontSize: 18,
    //padding: 5,
    // borderBottomColor: primary_color,
    // borderBottomWidth: StyleSheet.hairlineWidth,
    //backgroundColor: '#fff',
    //borderRadius: 10,
    color: primary_color,
  },
  fieldSet: {
    margin: 10,
    paddingHorizontal: 10,
    paddingBottom: 0,
    borderRadius: 10,
    borderWidth: 1,
    //alignItems: 'center',
    borderColor: primary_color,
    width: 300,
  },
  legend: {
    position: 'absolute',
    top: -16,
    left: 10,
    fontWeight: 'bold',
    backgroundColor: '#FFFFFF',
    color: primary_color,
    fontSize: 18,
    padding: 3,
  },
  legend2: {
    position: 'absolute',
    top: -16,
    left: 10,
    fontWeight: 'bold',
    backgroundColor: '#f2f2f2',
    color: primary_color,
    fontSize: 18,
    padding: 3,
  },
});
