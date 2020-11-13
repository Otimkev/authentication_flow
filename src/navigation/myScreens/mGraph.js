import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getTestResponse} from '../../model/test/loadTests/Actions';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {Loader} from '../../components/Loader';
import {ScrollView} from 'react-native-gesture-handler';
// import AddPatientScreen from '../myScreens/patient/AddPatientScreen';

const GraphScreenView = ({
  getAllTests,
  navigation,
  isFetching,
  route,
  patientTestData,
}) => {
  const allTestLables = [
    {id: 1, labeled: 'glucose_fasting'},
    {id: 2, labeled: 'glucose_random'},
    {id: 3, labeled: 'GTT2hr75_standard'},
    {id: 4, labeled: 'HBA1C_Glycosylated_HB'},
    {id: 5, labeled: 'Microalbumin_urine'},
  ];
  const [isLoading, setIsLoading] = useState(false);
  const [testLabel, setTestLabel] = useState('');
  const [testLabels, setTestLabels] = useState(allTestLables);
  const [test, setTest] = useState('glucose_random');
  const [value, setValue] = useState([]);
  const {patientId, label} = route.params;
  useEffect(() => {
    getAllTests({patientId, category: label, test});
    setValue(patientTestData);
  }, [getAllTests, label, patientId, test]);
  const mangoes = value ? value.map((item) => item.id) : [1, 2, 4, 5];
  console.log('----------------------------');
  console.log(mangoes);
  const graphItem = () => {
    return (
      <ScrollView horizontal={true}>
        {!patientTestData ? (
          <Loader />
        ) : (
          <View>
            <LineChart
              data={{
                labels: ['jan', 'feb', 'mar'],
                datasets: [
                  {
                    data: [1, 2, 3],
                  },
                ],
              }}
              width={500} // from react-native
              height={300}
              yAxisLabel={'Rs'}
              chartConfig={{
                backgroundColor: '#1cc910',
                backgroundGradientFrom: '#eff3ff',
                backgroundGradientTo: '#efefef',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>
        )}
      </ScrollView>
    );
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Patient Information', {patientId: item.id});
        }}>
        <View style={styles.row}>
          <View>
            <View style={styles.nameContainer}>
              <Text
                style={styles.nameTxt}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.labeled}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          extra={true}
          data={testLabels}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={graphItem}
          ListFooterComponent={() => <Text>1231312</Text>}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const mapStateToProps = (state, props) => {
  const {patientTestData, isFetching} = state.getTests;
  return {patientTestData, isFetching};
};

const mapDispatchToProps = (dispatch, props) => ({
  getAllTests: (args) => {
    dispatch(getTestResponse(args));
  },
});

export const mGraphScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GraphScreenView);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 18,
    width: 170,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 12,
    marginLeft: 15,
  },
});
