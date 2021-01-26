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
import {globalStyles} from '../../styles/Global';

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
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={globalStyles.mainContent}
        onPress={() => {
          navigation.navigate('Test Graph', {
            patientId: patientId,
            label: item.category.label,
          });
        }}>
        <View style={styles.row}>
          <View>
            <View style={styles.nameContainer}>
              <Text style={globalStyles.nameTxt} numberOfLines={1}>
                {item.label}
              </Text>
            </View>
            <View style={styles.msgContainer} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={globalStyles.loader}>
      <FlatList
        data={testCategoryList}
        keyExtractor={(item) => {
          return item.id.toString();
        }}
        renderItem={renderItem}
      />
      <FloatingAction
        actions={[
          {
            text: 'Add Test Category',
            name: 'bt_accessibility',
            position: 2,
            color: '#007360',
            icon: require('../../assets/img/test.png'),
          },
        ]}
        color="#007360"
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
    // borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
});
