import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Loader} from '../../components/Loader';
import axios from 'axios';
import {API_URL} from '../../utils/config';
import {retrieveData} from '../../services/persistentStorage';
import {Picker} from '@react-native-community/picker';
import {useFocusEffect} from '@react-navigation/native';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';
import {showToast} from '../../components/Toast';
import {globalStyles} from '../../styles/Global';
import {primary_color, secondary_color} from '../../styles/color';

const LabTestForm = ({navigation, route}) => {
  const {category_id, category_label, patient_id} = route.params;
  const [test_list, set_test_list] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [user_id, set_user_id] = useState(null);
  const [selected, setSelected] = useState(1);
  const [values, set_value] = useState('');
  const data = {
    userId: user_id,
    category: category_id,
    testLabel: selected,
    value: values,
  };

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;

      const fetchCategories = async () => {
        try {
          const userId = await retrieveData('user');
          const res = await axios.get(`${API_URL}categories/${category_id}/`);
          if (res.status === 200) {
            console.log(res.data);
          }
          if (isActive) {
            setisLoading(false);
            set_user_id(userId.id);
            set_test_list(res.data);
          }
        } catch (e) {
          console.log(e);
        }
      };

      fetchCategories();

      return () => {
        isActive = false;
      };
    }, [category_id]),
  );

  const onSubmit = async () => {
    try {
      const res = await axios.post(
        `${API_URL}patient/${patient_id}/add-test/`,
        data,
      );

      if (res.status === 200) {
        set_value('');
        return showToast('Test Added');
      } else {
        alert('Error!');
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeInput = (text, name) => {
    set_value(text);
  };

  // Our test list generator for picker
  let serviceItems = test_list.map((s, i) => {
    return <Picker.Item key={i} value={s.id} label={s.label} />;
  });

  // const on_share = async (receiver_id) => {

  // };
  const {value, userId} = data;
  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <View>
          <View>
            <View
              style={{marginVertical: 10, borderWidth: 1, borderColor: '#ccc'}}>
              <Picker
                selectedValue={selected}
                onValueChange={(service) => setSelected(service)}>
                {serviceItems}
              </Picker>
            </View>

            <View>
              <AppInput
                label="Enter Test"
                onChangeInput={(v) => onChangeInput(v, 'selected')}
              />
            </View>
          </View>
          <View>
            <AppButton
              title="Submit"
              onPress={onSubmit}
              disabled={!value || !userId}
              buttonStyle={styles.buttonStyle}
            />
            <AppButton
              title="View Test Graph"
              buttonStyle={styles.buttonStyle}
              onPress={() => {
                navigation.navigate('test_graph', {
                  patient_id,
                  category_label,
                  category_id,
                });
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default LabTestForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  buttonStyle: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    height: 45,
    marginVertical: 20,
    backgroundColor: primary_color,
  },
  container2: {
    flex: 1,
  },
  container3: {
    flex: 1,
  },
});
