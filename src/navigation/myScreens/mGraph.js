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
}) => {
  const allTestLables = [
    {id: 1, labeled: 'glucoseFasting'},
    {id: 2, labeled: 'glucoseRandom'},
    {id: 3, labeled: 'gtt2Hr75gStandard'},
    {id: 4, labeled: 'hba1cGlycosylatedHB'},
    {id: 5, labeled: 'microalbumin'},
  ];
  const [isLoading, setIsLoading] = useState(false);
  const [CategoryLabel, setCategoryLabel] = useState('');
  const [testLabels, setTestLabels] = useState(allTestLables);
  const [test, setTest] = useState('glucoseFasting');
  const [dataSet, setDataSet] = useState([{value: 1, createAt: 'jan'}]);
  const {patientId, label} = route.params;
  useEffect(() => {
    getAllTests({patientId, category: label, test});
  }, [getAllTests, label, patientId, test]);
  const mangoes = dataSet.map((item) => item.value);
  const oranges = dataSet.map((item) => item.createAt);
  const changeTests = (vLabel) => {
    setTest(vLabel);
    //getAllTests({patientId, category: label, test});
    setDataSet(patientTestData);
  };
  const graphItem = () => {
    return (
      <View>
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
                width={500} // from react-native
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
          changeTests(item.labeled);
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
          //ListFooterComponent={}
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
  button: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
});
