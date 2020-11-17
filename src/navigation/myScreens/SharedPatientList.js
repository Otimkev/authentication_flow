import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getSharedPatientsResponse} from '../../model/patient/getSharedPatients/Actions';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {Loader} from '../../components/Loader';
import {color} from 'react-native-reanimated';
import {globalStyles} from '../../styles/Global';

const SharedPatientLIstView = ({
  navigation,
  isFetching,
  sharedList,
  getSharedPatients,
  responseData,
}) => {
  useEffect(() => {
    getSharedPatients();
  }, [getSharedPatients, responseData]);
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Patient Information', {
            patientId: item.patient.id,
          });
        }}>
        <View style={styles.row}>
          <View>
            <View style={styles.nameContainer}>
              <Text
                style={globalStyles.nameTxt}
                numberOfLines={1}
                ellipsizeMode="tail">
                {`${item.patient.firstName} ${item.patient.lastName}`}
              </Text>
              <Text style={styles.mblTxt}> General Ward BED03 </Text>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{item.id}</Text>
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
      {isFetching ? (
        <Loader />
      ) : (
        <FlatList
          extra={sharedList}
          data={sharedList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const mapStateToProps = (state, props) => {
  const {sharedList, isFetching} = state.sharedPatients;
  const {isLoading, responseData} = state.sharePatient;
  return {sharedList, isFetching, responseData};
};

const mapDispatchToProps = (dispatch, props) => ({
  getSharedPatients: () => {
    dispatch(getSharedPatientsResponse());
  },
});

export const SharedPatientList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SharedPatientLIstView);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#007360',
    borderBottomWidth: StyleSheet.hairlineWidth,
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
});
