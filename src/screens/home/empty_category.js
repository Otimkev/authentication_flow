import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppButton from '../../components/AppButton';

const EmptyCategories = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Empty list</Text>
      <AppButton
        onPress={() => {
          navigation.navigate('view_category_tests');
        }}
        icon={{name: 'exit-to-app'}}
        buttonStyle={styles.buttonStyle}
        title="Add test"
      />
    </View>
  );
};

export default EmptyCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
