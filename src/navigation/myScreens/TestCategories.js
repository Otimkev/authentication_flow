import React, {useEffect, useState} from 'react';
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
import {getTestCategoryResponse} from '../../model/test/loadTestCategories/Actions';
import {Loader} from '../../components/Loader';

export const TestCategoryScreenView = ({
  navigation,
  getTestCategory,
  testCategoryList,
  route,
  isFetching,
}) => {
  const patientId = route.params.patientId;
  useEffect(() => {
    getTestCategory(patientId);
  }, [getTestCategory, patientId]);
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Test Graph', {
            patientId: patientId,
            label: item.category.label,
          });
        }}>
        <View style={styles.row}>
          <View>
            <View style={styles.nameContainer}>
              <Text
                style={styles.nameTxt}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.category.label}
              </Text>
            </View>
            <View style={styles.msgContainer} />
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
          data={testCategoryList}
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
  const {testCategoryList, isFetching} = state.getTestCategory;
  return {testCategoryList, isFetching};
};

const mapDispatchToProps = (dispatch, props) => ({
  getTestCategory: (args) => {
    dispatch(getTestCategoryResponse(args));
  },
});

export const TestCategoryScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TestCategoryScreenView);

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
