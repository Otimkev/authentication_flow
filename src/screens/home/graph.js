import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import {Loader} from '../../components/Loader';
import axios from 'axios';
import {API_URL} from '../../utils/config';
import {Picker} from '@react-native-community/picker';
import {useFocusEffect} from '@react-navigation/native';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';
import {showToast} from '../../components/Toast';
import {LineChart} from 'react-native-chart-kit';

const Graph = ({navigation, route}) => {
  const {category_id, category_label, patient_id} = route.params;

  const [test_list, set_test_list] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [selected, setSelected] = useState(1);
  const [m, set_m] = useState([]);
  const [l, set_l] = useState([]);
  const [v, set_v] = useState([]);

  useEffect(() => {
    const ff = async () => {
      try {
        let response = await axios.get(`${API_URL}categories/${category_id}/`);
        const res = await axios.get(
          `${API_URL}tests/${patient_id}/${selected}/`,
        );
        let data = await response.data;
        let test_data = res.data;
        let newState = data.map((e) => e); // map your state here
        let new_l = test_data.map((e) => e.createdAt);
        let new_v = test_data.map((e) => e.value);
        set_test_list(newState); // and then update the state
        setisLoading(false);
        set_l(new_l);
        set_v(new_v);
        console.log(newState);
      } catch (error) {
        console.error(error.message);
      }
    };
    ff();
  }, [category_id, patient_id, selected]);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     let isFetching = true;
  //     const fetch_lab_test_values = async () => {
  //       try {
  //         const res = await axios.get(
  //           `${API_URL}tests/${patient_id}/${selected}/`,
  //         );
  //         const res_data = await axios.get(
  //           `${API_URL}categories/${category_id}/`,
  //         );

  //         if (isFetching) {
  //           if (res_data.status === 200) {
  //             set_test_list(res_data.data);
  //             set_m(res.data);
  //             setisLoading(false);
  //           }
  //         }
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     };

  //     fetch_lab_test_values();

  //     return () => {
  //       isFetching = false;
  //     };
  //   }, [category_id, patient_id, selected]),
  // );

  // const toJson = (response) => response.json();

  // fetch(req)
  //   .then(toJson)
  //   .then((json) => {
  //     this.setState(() => {
  //       return {
  //         data: json,
  //       };
  //     });

  //     return json;
  //   })
  //   .then((json) => {
  //     console.log(json);
  //     const promises = json.meals.map((obj) => {
  //       let url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${obj.id}/information`;
  //       let req = new Request(url, {
  //         method: 'GET',
  //         headers: header,
  //       });
  //       return fetch(req)
  //         .then(toJson)
  //         .then((json) => {
  //           console.log(json);
  //           this.setState((prevState) => ({
  //             recipe: prevState.recipe.push(json),
  //           }));
  //         });
  //     });

  //     return Promise.all(promises);
  //   })
  //   .then(() => {
  //     console.log('job done');
  //   });

  // Our test list generator for picker
  let serviceItems = test_list.map((s, i) => {
    return <Picker.Item key={i} value={s.id} label={s.label} />;
  });

  const h = m.map((i) => {
    i.createdAt;
  });
  const g = m.map((i) => {
    i.value;
  });

  console.log('M');
  const testGraph = () => {
    return (
      <View>
        <View>
          <Text style={styles.title}>{'Graph of time against'}</Text>
          <ScrollView horizontal={true}>
            <View style={{margin: 8}}>
              <LineChart
                data={{
                  labels: [0, ...l],
                  datasets: [
                    {
                      data: [0, ...v],
                    },
                  ],
                }}
                width={Dimensions.get('window').width * 1.5} // from react-native
                height={300}
                yAxisLabel=""
                yAxisSuffix="mm "
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: '#1cc910',
                  backgroundGradientFrom: '#eff3ff',
                  backgroundGradientTo: '#efefef',
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <View>
          <View style={{marginBottom: 16}}>
            <Picker
              selectedValue={selected}
              onValueChange={(service) => setSelected(service)}>
              {serviceItems}
            </Picker>
          </View>
          {testGraph()}
          <View />
          <View>
            <AppButton
              title="Add Test"
              onPress={() => {
                navigation.navigate('lab_test_form', {
                  category_label: category_label,
                  category_id: category_id,
                  patient_id: patient_id,
                  is_from_graph: true,
                });
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default Graph;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  container2: {
    flex: 1,
  },
  container3: {
    flex: 1,
  },
});
