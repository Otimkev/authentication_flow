import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ListHeader = (props) => {
  return (
    <View style={styles.row}>
      <View>
        <Text>Bed Number:</Text>
        <Text>Bed Number:</Text>
        <Text>Bed Number:</Text>
        <Text>Bed Number:</Text>
        <Text>Bed Number:</Text>
      </View>
    </View>
  );
};

export default ListHeader;

const styles = StyleSheet.create({
  row: {
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
});
