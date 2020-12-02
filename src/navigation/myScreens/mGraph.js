import React, {useEffect, useState, useCallback} from 'react';
import {connect} from 'react-redux';
import {getTestResponse} from '../../model/test/loadTests/Actions';
import {getTestCategories} from '../../model/test/getCategoryTests/Actions';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Button,
} from 'react-native';
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
  useEffect(() => {
    getAllTests({patientId, category: label, test});
    getCategoryTests(label, null);
  }, [getAllTests, getCategoryTests, label, patientId, test]);

  const m = () => {
    const result = categoryTests.map((item) => item.value);
    return result[0];
  };
  console.log(`this is it${m()}`);
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log('Not implemented');
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
      <Text>{}</Text>
      <FlatList
        extra={true}
        data={categoryTests}
        keyExtractor={(item) => item.id.toString()}
        //ListHeaderComponent={graphItem}
        //ListFooterComponent={}
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
  getCategoryTests: (data, mangoes) => {
    dispatch(getTestCategories(data, mangoes));
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
