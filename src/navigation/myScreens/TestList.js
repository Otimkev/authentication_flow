import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {getAllTestCategory} from '../../model/patient/getAllTestCategories/Actions';
import {connect} from 'react-redux';
import {Loader} from '../../components/Loader';
import {globalStyles} from '../../styles/Global';
const TestListScreenView = ({
  navigation,
  route,
  testCategories,
  getTestCategories,
}) => {
  useEffect(() => {
    getTestCategories();
  }, [getTestCategories]);
  const id = route.params.patientId;
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={globalStyles.mainContent}
        onPress={() => {
          navigation.navigate('glucose metabolism', {
            label: item.label,
            patientId: id,
            labelId: item.id,
          });
        }}>
        <View style={styles.row}>
          <View>
            <View style={styles.nameContainer}>
              <Text
                style={globalStyles.nameTxt}
                // numberOfLines={2}
                // ellipsizeMode="head"
              >
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
    <View style={{flex: 1}}>
      {!testCategories ? (
        <Loader />
      ) : (
        <FlatList
          data={testCategories}
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
  const {testCategories} = state.getAllTestCategories;
  return {testCategories};
};

const mapDispatchToProps = (dispatch, props) => ({
  getTestCategories: (args) => {
    dispatch(getAllTestCategory(args));
  },
});

const TestListScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TestListScreenView);

export default TestListScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    // borderBottomWidth: 1,
    padding: 10,
  },
});
