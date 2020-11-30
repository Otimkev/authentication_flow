import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getTestResponse} from '../../model/test/loadTests/Actions';
import {getTestCategoriesResponse} from '../../model/test/getCategoryTests/Actions';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  Button,
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
  categoryTests,
  getCategoryTests,
}) => {
  useEffect(() => {
    getAllTests({patientId, category: label, test});
    getCategoryTests(label);
  }, [getAllTests, getCategoryTests, label, patientId, test]);
  const m = () => {
    if (categoryTests.length > 0) {
      return categoryTests[0].value;
    }
  };
  const [isLoading, setIsLoading] = useState(false);
  const [CategoryLabel, setCategoryLabel] = useState('');
  const [title, setTitle] = useState(m());
  const [test, setTest] = useState('');
  const [dataSet, setDataSet] = useState([{value: 1, createAt: 'jan'}]);
  const {patientId, label} = route.params;
  const mangoes = dataSet.map((item) => item.value);
  const oranges = dataSet.map((item) =>
    new Date(Date.parse(item.createAt)).toDateString(),
  );
  const changeTests = (vLabel) => {
    setTest(vLabel);
    setDataSet(patientTestData);
  };
  const graphItem = () => {
    return (
      <View>
        <Text style={styles.title}>{`Graph of ${title} against time`}</Text>
        <ScrollView horizontal={true}>
          {!patientTestData ? (
            <Loader />
          ) : (
            <View>
              <LineChart
                data={{
                  labels: oranges,
                  datasets: [
                    {
                      data: mangoes,
                    },
                  ],
                }}
                width={Dimensions.get('window').width * 2} // from react-native
                height={300}
                yAxisLabel={'mm '}
                chartConfig={{
                  backgroundColor: '#1cc910',
                  backgroundGradientFrom: '#eff3ff',
                  backgroundGradientTo: '#efefef',
                  decimalPlaces: 0, // optional, defaults to 2dp
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
        <View style={styles.button}>
          <Button
            title="Add Test"
            onPress={() => {
              navigation.navigate(label, {
                category: label,
                patientId: patientId,
              });
            }}
          />
        </View>
      </View>
    );
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setTitle(item.value);
          changeTests(item.value);
        }}>
        <View style={styles.row}>
          <View>
            <View style={styles.nameContainer}>
              <Text
                style={styles.nameTxt}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.value}
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
      {/* {isLoading ? (
        <Loader />
      ) : ( */}
      <FlatList
        extra={true}
        data={categoryTests}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={graphItem}
        //ListFooterComponent={}
        renderItem={renderItem}
      />
      {/* )} */}
    </View>
  );
};

const mapStateToProps = (state, props) => {
  const {patientTestData, isFetching} = state.getTests;
  const {categoryTests} = state.getCategoryTests;
  return {patientTestData, isFetching, categoryTests};
};

const mapDispatchToProps = (dispatch, props) => ({
  getAllTests: (args) => {
    dispatch(getTestResponse(args));
  },
  getCategoryTests: (args) => {
    dispatch(getTestCategoriesResponse(args));
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
  button: {
    margin: 8,
  },
  title: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 18,
    alignContent: 'center',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginVertical: 8,
  },
});
