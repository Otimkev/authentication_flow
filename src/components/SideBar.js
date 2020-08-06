import React from 'react';
import {
  View,
  Text,
  Stylesheet,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import {Ionicons} from 'react-native-vector-icons';

const Sidebar = (props) => (
  <ScrollView>
    <ImageBackground
      source={require('../assets/img/Criticare_Logo.jpg')}
      style={{
        width: undefined,
        padding: 16,
        paddingTop: 48,
      }}>
      <Image
        source={require('../assets/img/sampleProfilePic.jpg')}
        style={Stylesheet.profile}
      />
      <Text style={styles.name}>Yusuf Mugagga Kasajja</Text>

      <View style={{flexDirection: 'row'}}>
        <Text style={styles.InPatients}>5 In-Patients</Text>
        <Ionicons name="md-people" size={16} color="rgba(255, 255, 255, 0.8)" />
      </View>
    </ImageBackground>

    <View>
      <DrawerNavigatorItems {...props} />
    </View>
  </ScrollView>
);

const styles = Stylesheet.create({
  container: {
    flex: 1,
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#fff',
  },
  name: {
    color: '#fff',
    fontSize: 20,
    FontWeight: '800',
    marginVertical: 8,
  },
  InPatients: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 13,
    marginRight: 4,
  },
});

export default Sidebar;
