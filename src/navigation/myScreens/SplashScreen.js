import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const SplashScreens = () => {
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.props.navigation.navigate('SignInScreen');
  //   }, 2500);
  // }
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.imageContainer}
          source={require('../../assets/img/Crit.png')}
        />
      </View>
    </View>
  );
};

export default SplashScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: 350,
    height: 150,
  },
});
