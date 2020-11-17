import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {getTestCategoryResponse} from '../../model/test/loadTestCategories/Actions';
import {Loader} from '../../components/Loader';
import {FloatingAction} from 'react-native-floating-action';

export const TestCategoryScreenView = ({
  navigation,
  getTestCategory,
  testCategoryList,
  route,
  isFetching,
}) => {
  const [state, setState] = useState([]);
  const patientId = route.params.patientId;
  useEffect(() => {
    getTestCategory(patientId);
  }, [getTestCategory, patientId]);
  console.log(testCategoryList);
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

  const IsTest = () => {
    return (
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          justifyContent: 'center',
          marginHorizontal: 16,
        }}>
        <Button
          title="Add Test"
          onPress={() =>
            navigation.navigate('Test List', {patientId: patientId})
          }
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {testCategoryList.length === 0 ? (
        <IsTest />
      ) : (
        <FlatList
          data={testCategoryList}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
          renderItem={renderItem}
        />
      )}
      <FloatingAction
        actions={[
          {
            text: 'Add Test Category',
            name: 'bt_accessibility',
            position: 2,
          },
        ]}
        onPressItem={() => {
          navigation.navigate('Test List', {patientId: patientId});
        }}
      />
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
