import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {secondary_color, primary_color} from '../../styles/color';
import {globalStyles} from '../../styles/Global';

const WelcomeScreen = () => {
  return (
    <View style={globalStyles.container}>
      <View>
        <Image
          source={require('../../assets/img/Criticare_Logo.jpg')}
          style={styles.header}
        />
      </View>
      <>
        <Text style={styles.headerText}>
          inovate.<Text style={styles.span}>Inform</Text>.inspire
        </Text>
      </>
      <View>
        <Image
          source={require('../../assets/img/Real-time.jpg')}
          style={styles.middleText}
        />
      </View>
      <View>
        <TouchableOpacity style={globalStyles.ButtonSmall}>
          <Text style={globalStyles.ButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.choice}>
        <Text style={styles.choiceText}>or</Text>
      </View>
      <View>
        <TouchableOpacity style={globalStyles.ButtonSmall}>
          <Text style={globalStyles.ButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontStyle: 'normal',
    fontSize: 20,
    color: primary_color,
    textAlign: 'center',
    marginTop: 40,
    fontWeight: 'bold',
  },
  span: {
    color: secondary_color,
  },
  middleText: {
    height: 300,
    width: 300,
  },
  choice: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  choiceText: {
    color: 'grey',
  },
});
