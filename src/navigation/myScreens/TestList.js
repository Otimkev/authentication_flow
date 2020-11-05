import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const TestListScreen = ({navigation, route}) => {
  const [testCategoryLabel, setTestCategory] = useState([
    {label: 'Inflam/ Infection Markers', id: 1},
    {label: 'General Endocrine', id: 2},
    {label: 'Hypertension/Neuro Endocrine', id: 3},
    {label: 'Pregnancy', id: 4},
    {label: 'Nutrition/Iron Studies', id: 5},
    {label: 'Bone Turnover', id: 6},
    {label: 'Autoimmune', id: 7},
    {label: 'Allergy', id: 8},
    {label: 'Andrology', id: 9},
    {label: 'Lung Kidney, Skeleton', id: 10},
    {label: 'Glucose Metabolism', id: 11},
    {label: 'Lipid Metabolism', id: 12},
    {label: 'Heart and Muscle', id: 13},
    {label: 'Liver/Pancreas/GIT', id: 14},
    {label: 'Pharmacology', id: 15},
    {label: 'Haematology', id: 16},
    {label: 'Coagulation', id: 17},
    {label: 'Hepatitis Viruses', id: 18},
    {label: 'HIV', id: 19},
    {label: 'Microbiology', id: 20},
  ]);
  const id = route.params.patientId;
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(item.label, {label: item.label, patientId: id});
        }}>
        <View style={styles.row}>
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt} numberOfLines={1}>
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
      <FlatList
        data={testCategoryLabel}
        keyExtractor={(item) => {
          return item.id.toString();
        }}
        renderItem={renderItem}
      />
    </View>
  );
};

export default TestListScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 18,
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
