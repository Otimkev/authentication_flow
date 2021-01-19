import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {secondary_color, primary_color} from '../../styles/color';
import {globalStyles} from '../../styles/Global';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={globalStyles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/img/Criticare_Logo.jpg')}
          style={styles.header}
        />
      </View>
      <>
        <Text style={styles.headerText}>
          innovate.<Text style={styles.span}>Inform</Text>.inspire
        </Text>
      </>
      <View>
        <Image
          source={require('../../assets/img/Real-time.jpg')}
          style={styles.middleText}
        />
      </View>
      <View>
        <TouchableOpacity
          style={globalStyles.ButtonSmall}
          onPress={() => navigation.navigate('SignInScreen')}>
          <Text style={globalStyles.ButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <View style={styles.choice} />
        <View>
          <Text style={styles.choiceText}>OR</Text>
        </View>
        <View style={styles.choice} />
      </View>
      <View>
        <TouchableOpacity
          style={globalStyles.ButtonSmall}
          onPress={() => navigation.navigate('SignUpScreen')}>
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
    fontWeight: 'bold',
    top: -20,
  },
  span: {
    color: secondary_color,
  },
  middleText: {
    height: 260,
    width: 350,
  },
  choice: {
    flex: 1,
    height: 1,
    backgroundColor: '#b8cda7',
    top: 20,
  },
  choiceText: {
    color: '#b8cda7',
    width: 50,
    textAlign: 'center',
    top: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  header: {
    alignItems: 'center',
    height: 170,
    width: 350,
    top: -20,
  },
});
