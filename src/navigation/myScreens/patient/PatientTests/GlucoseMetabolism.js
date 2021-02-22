import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Button,
  ToastAndroid,
} from 'react-native';
import {globalStyles} from '../../../../styles/Global';
import * as actions from '../../../../model/test/addTest/Actions';
import * as actions2 from '../../../../model/test/getTestsInCategory/Actions';
import {connect} from 'react-redux';
import {primary_color} from '../../../../styles/color';
import {Picker} from '@react-native-community/picker';
import {Loader} from '../../../../components/Loader';
const GlucoseMetabolismScreenView = ({
  navigation,
  route,
  createTest,
  addTestData,
  categoryTests,
  isLoading,
  getTestList,
}) => {
  const label = route.params.label;
  const labelId = route.params.labelId;
  const patientId = route.params.patientId;
  const [selected, setSelected] = useState(1);

  const [mValue, setValue] = useState('');
  useEffect(() => {
    getTestList(labelId);

    const populateTests = () => {
      let testList = [];
      if (categoryTests !== undefined) {
        for (let i; i <= categoryTests.length(); i++) {
          testList.append(categoryTests[i]);
        }
        return testList;
      }
    };
    populateTests();
  }, [categoryTests, getTestList, labelId]);

  const [glucoseFasting, setGlucoseFasting] = useState('');
  const [glucoseRandom, setGlucoseRandom] = useState('');
  const [gtt2Hr75gStandard, setGtt2Hr75gStandard] = useState('');

  const params = [
    {name: 'glucoseFasting', id: 1},
    {name: 'glucoseRandom', id: 2},
    {name: 'gtt2Hr75gStandard', id: 3},
    {name: 'hba1cGlycosylatedHB', id: 4},
    {name: 'microalbumin', id: 5},
  ];
  const testData = {
    category: labelId,
    testLabel: selected,
    value: mValue,
  };
  const [test, setTest] = useState(params);
  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  // Our test list generator for picker
  let serviceItems = test.map((s, i) => {
    return <Picker.Item key={i} value={s.id} label={s.name} />;
  });

  return (
    <View>
      {!isLoading ? (
        <View style={globalStyles.testContainer}>
          <View>
            <View>
              <Picker
                selectedValue={selected}
                onValueChange={(service) => setSelected(service)}>
                {serviceItems}
              </Picker>
            </View>
            <View style={globalStyles.fieldSet}>
              <Text style={globalStyles.legend2}>{`${selected}`}</Text>
              <TextInput
                placeholder={'Enter Test Value'}
                style={globalStyles.TextInput}
                onChangeText={(text) => {
                  setValue(text);
                }}
                keyboardType="phone-pad"
              />
            </View>
          </View>
          <TouchableOpacity
            style={globalStyles.ButtonSmall}
            onPress={() => {
              createTest(patientId, testData);
              console.log(testData);
              showToast('Successful');
              navigation.navigate('Test Graph', {
                patientId: patientId,
                labelId,
                label,
              });
            }}>
            <Text style={styles.loginText}>SUBMIT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={globalStyles.ButtonSmall}
            onPress={() => {
              createTest(patientId, testData);
              console.log(testData);
              showToast('Successful');
              navigation.navigate('Test Graph', {
                patientId: patientId,
                label: testData.category,
              });
            }}>
            <Text style={styles.loginText}>Preview</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text>Loading..</Text>
        </View>
      )}
    </View>
  );
};

const mapStateToProps = (state, props) => {
  const {addTestData} = state.addTest;
  const {categoryTests, isLoading} = state.getTestsInCategory;
  return {addTestData, categoryTests, isLoading};
};

const mapDispatchToProps = (dispatch, props) => ({
  createTest: (args1, args2) => {
    dispatch(actions.addTestResponse(args1, args2));
  },
  getTestList: (args1) => {
    dispatch(actions2.getTestInCategoriesResponse(args1));
  },
});

const GlucoseMetabolismScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GlucoseMetabolismScreenView);

export default GlucoseMetabolismScreen;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    width: 300,
    marginBottom: 10,
  },
  loginText: {
    fontSize: 24,
    color: '#fff',
  },
  TextInput: {
    paddingHorizontal: 10,
    color: '#026062',
    fontWeight: 'normal',
    fontSize: 20,
  },
  forgot: {
    color: '#aaae',
    fontSize: 11,
    textAlign: 'center',
  },
  text: {
    color: '#007360',
  },
  button: {
    margin: 10,
  },
});
