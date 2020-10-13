import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const APatientScreen = () => {
  return (
    <View style={styles.row}>
      <View>
        <Text>Bed No:</Text>
        <Text>45BF</Text>
      </View>
      <View>
        <Text>Bed No:</Text>
        <Text>45BF</Text>
      </View>
      <View>
        <Text>Bed No:</Text>
        <Text>45BF</Text>
      </View>
    </View>
  );
};

export default APatientScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'column',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
});
