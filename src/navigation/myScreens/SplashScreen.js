import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('SignInScreen');
    }, 2500);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.imageContainer}
            source={require('../../assets/img/logo2-avatar.png')}
          />
        </View>
      </View>
    );
  }
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: 80,
    height: 80,
  },
});
