import React from 'react';
import Button from '../components/NewButton';
import {View} from 'react-native';

const App = ({navigation}) => {
  const onPress = (route) => {
    navigation.navigate(route);
  };
  return (
    <View>
      <Button
        text="Patients"
        size="small"
        onPress={() => onPress('Patients')}
      />
      <Button
        text="Specialists"
        size="small"
        onPress={() => onPress('Specialists')}
      />
      <Button text="Wards" size="small" onPress={() => onPress('Wards')} />
      <Button
        text="Medical Officers"
        size="small"
        onPress={() => onPress('Medical Officers')}
      />
      <Button
        text="Ward Details"
        size="small"
        onPress={() => onPress('Ward Details')}
      />
    </View>
  );
};

export default App;
