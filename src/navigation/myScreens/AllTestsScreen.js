import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {addTestSuccess} from '../../model/test/addTest/Actions';
import {getTestResponse} from '../../model/test/loadTests/Actions';
import {Loader} from '../../components/Loader';

export const AllTestScreenView = ({
  navigation,
  getAllTests,
  patientTestData,
  route,
  isFetching,
}) => {
  const patientId = route.params.patientId;
  useEffect(() => {
    getAllTests(patientId);
  }, [getAllTests, patientId]);
  console.log(patientTestData);
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.row}>
          <View>
            <View style={styles.nameContainer}>
              <Text
                style={styles.nameTxt}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.attribute.label}
              </Text>
              <Text style={styles.mblTxt}>{item.value}</Text>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{item.value}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      {isFetching ? (
        <Loader />
      ) : (
        <FlatList
          data={patientTestData}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
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

export const AllTestScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllTestScreenView);

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
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 12,
    marginLeft: 15,
  },
});
