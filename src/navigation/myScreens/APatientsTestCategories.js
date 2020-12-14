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
import {globalStyles} from '../../styles/Global';

export const ApatientsTestCategoryScreenView = ({
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
          navigation.navigate('invited_patient_test_graph', {
            patientId: patientId,
            label: item.category.label,
          });
        }}>
        <View style={styles.row}>
          <View>
            <View style={styles.nameContainer}>
              <Text style={globalStyles.nameTxt} numberOfLines={1}>
                {item.category.label}
              </Text>
            </View>
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

export const ApatientsTestCategoryScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApatientsTestCategoryScreenView);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
});
