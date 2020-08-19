import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-cards';

const HomeCards = ({navigation}) => {
  return (
    <ScrollView>
      <Card style={styles.container}>
        <CardImage
          source={{
            uri: 'http://bit.ly/2GfzooV',
          }}
          title="Top 10 South African beaches"
        />
        <CardTitle subtitle="Number 6" />
        <CardContent text="Clifton, Western Cape" />
        <CardAction separator={true} inColumn={false}>
          <CardButton onPress={() => {}} title="Share" color="#FEB557" />
          <CardButton
            onPress={() => navigation.navigate('SignUp')}
            title="Explore"
            color="#FEB557"
          />
        </CardAction>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeCards;
