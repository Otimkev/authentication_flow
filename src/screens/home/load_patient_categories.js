import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import * as action_types from '../../store/get_patient_details/actions';
import {Loader} from '../../components/Loader';
import {useTheme} from '@react-navigation/native';
import AppButton from '../../components/AppButton';
import {globalStyles} from '../../styles/Global';
import {primary_color, secondary_color} from '../../styles/color';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ListItem, Avatar} from 'react-native-elements';
import axios from 'axios';
import {API_URL} from '../../utils/config';
import {retrieveData} from '../../services/persistentStorage';
import {useFocusEffect} from '@react-navigation/native';
import {FloatingAction} from 'react-native-floating-action';

const actions = [
  {
    text: 'Add Test Category.',
    // icon: require('../../assets/img/chat2.png'),
    name: 'view_category_tests',
    position: 4,
    color: '#007360',
  },
];

const ListDonePatientCategories = ({navigation, route}) => {
  const patient_id = route.params.patient_id;

  const [category_list, set_category_list] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [user_id, set_user_id] = useState(1);
  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;

      const fetchUser = async () => {
        try {
          const user_id = await retrieveData('user');
          const res = await axios.get(
            `${API_URL}categories/patient/${patient_id}/`,
          );
          if (res.status === 200) {
            console.log(res.data);
          }
          if (isActive) {
            setisLoading(false);
            set_user_id(user_id);
            set_category_list(res.data);
          }
        } catch (e) {
          console.log(e);
        }
      };

      fetchUser();

      return () => {
        isActive = false;
      };
    }, [patient_id]),
  );

  const on_share = async (receiver_id) => {
    try {
      const res = await axios.post(
        `${API_URL}share/${4}/${receiver_id}/${patient_id}/`,
      );
      console.log(receiver_id);
      if (res.status === 200) {
        return navigation.goBack();
      } else {
        alert('Error sharing!');
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const EmptyCategories = () => {
    return (
      <View>
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

  const renderItem = ({item}) => {
    return (
      <ListItem
        bottomDivider
        onPress={() => {
          navigation.navigate('test_graph', {
            patient_id: patient_id,
            category_label: item.category.label,
            category_id: item.category.id,
          });
        }}>
        <ListItem.Content>
          <ListItem.Title>{item.category.label}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : category_list.length <= 0 ? (
        <View style={globalStyles.container}>
          <View >
            <Text style={{fontSize: 16, textAlign: 'center'}}>Empty list!</Text>
          </View>
        </View>
      ) : (
        <View>
          <FlatList
            data={category_list}
            extraData={true}
            renderItem={renderItem}
            keyExtractor={(item) => Math.random().toString()}
          />
          <View />
        </View>
      )}
      <FloatingAction
        actions={actions}
        color="#007360"
        onPressItem={(name) => {
          navigation.navigate(name, {
            patient_id: patient_id,
          });
        }}
      />
    </View>
  );
};

export default ListDonePatientCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonStyle: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    height: 45,
    backgroundColor: primary_color,
  },
});
