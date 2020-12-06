import React, {useEffect, useState, useCallback} from 'react';
import {connect} from 'react-redux';
import {getTestResponse} from '../../model/test/loadTests/Actions';
import {
  getTestCategories,
  getTestCategoriesResponse,
} from '../../model/test/getCategoryTests/Actions';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Button,
} from 'react-native';
import {primary_color} from '../../styles/color';
import {LineChart} from 'react-native-chart-kit';
import {Loader} from '../../components/Loader';
import {ScrollView} from 'react-native-gesture-handler';
const GraphScreenView = ({
  getAllTests,
  navigation,
  isFetching,
  isLoading,
  route,
  patientTestData,
  categoryTests,
  getCategoryTests,
}) => {
  const {patientId, label} = route.params;
  const [test, setTest] = useState('');
  const [testData, setTestData] = useState([]);
  const [title, setTitle] = useState('');
  const [isGraph, setIsGraph] = useState(false);
  useEffect(() => {
    getCategoryTests(label);
  }, [getAllTests, getCategoryTests, label, patientId, test]);
  const dt = patientTestData.map((item) =>
    new Date().toDateString(item.createAt),
  );
  const val = patientTestData.map((item) => item.value);

  const testGraph = () => {
    return (
      <View style={{flex: 1}}>
        {isFetching ? (
          <Loader />
        ) : (
          <View>
            <Text style={styles.title}>{`Graph of time against ${title}`}</Text>
            <ScrollView horizontal={true}>
              <View style={{margin: 8}}>
                <LineChart
                  data={{
                    labels: dt,
                    datasets: [
                      {
                        data: val,
                      },
                    ],
                  }}
                  width={Dimensions.get('window').width * 1.5} // from react-native
                  height={300}
                  yAxisLabel=""
                  yAxisSuffix="mm "
                  yAxisInterval={1} // optional, defaults to 1
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
            </ScrollView>
          </View>
        )}
        <View style={styles.button}>
          <Button
            color={primary_color}
            title="Add Test"
            onPress={() =>
              navigation.navigate(`${label}`, {
                patientId,
                category: label,
              })
            }
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
          setIsGraph(true);
          getAllTests({patientId, category: label, test: item.value});
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
      <FlatList
        extra={true}
        data={categoryTests}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={isGraph ? testGraph : null}
        renderItem={renderItem}
      />
    </View>
  );
};

const mapStateToProps = (state, props) => {
  const {patientTestData, isFetching} = state.getTests;
  const {categoryTests, isLoading} = state.getCategoryTests;
  return {patientTestData, isFetching, categoryTests, isLoading};
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
