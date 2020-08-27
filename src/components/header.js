import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MaterialIcons} from 'react-native-vector-icons';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 2,
  },
});

export default Header;
