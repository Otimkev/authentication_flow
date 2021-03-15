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
import {SafeAreaView} from 'react-native-safe-area-context';
import {ListItem, Avatar} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';
import ProfileScreen from '../profile/profile_screen';
import {colors} from '../../theme';
import ScreenContainer from '../../components/ScreenContainer';
import axios from 'axios';
import {API_URL} from '../../utils/config';
import {retrieveData} from '../../services/persistentStorage';
import {useFocusEffect} from '@react-navigation/native';
import EmptyCategories from './empty_category';

const IndexTestCategories = ({navigation, route}) => {
  const [category_list, set_category_list] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [user_id, set_user_id] = useState(1);
  const patient_id = route.params.patient_id;
  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;

      const fetchCategories = async () => {
        try {
          const res = await axios.get(`${API_URL}categories/`);
          if (res.status === 200) {
            console.log(res.data);
          }
          if (isActive) {
            setisLoading(false);

            set_category_list(res.data);
          }
        } catch (e) {
          console.log(e);
        }
      };

      fetchCategories();

      return () => {
        isActive = false;
      };
    }, []),
  );

  const renderItem = ({item}) => {
    return (
      <ListItem
        bottomDivider
        onPress={() => {
          navigation.navigate('lab_test_form', {
            category_label: item.label,
            category_id: item.id,
            patient_id: patient_id,
            is_from_graph: false,
          });
        }}>
        <ListItem.Content>
          <ListItem.Title>{item.label}</ListItem.Title>
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
        <EmptyCategories />
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
    </View>
  );
};

export default IndexTestCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
