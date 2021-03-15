import axios from 'axios';
import {API_URL} from '../../utils/config';
import {retrieveData} from '../persistentStorage';

export const index_patients = async () => {
  try {
    const user_id = await retrieveData('user');
    const response = await axios.get(`${API_URL}patients/${user_id.id}/${1}/`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const get_a_patient = async ({patient_id}) => {
  try {
    const response = await axios.get(`${API_URL}patient/${patient_id}/`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const register_patient = async ({patient_data, user_id}) => {
  try {
    const d = await axios.post(
      `${API_URL}register-patient/${user_id}/`,
      patient_data,
    );
    const k = d.data;
    const c = JSON.stringify(k);
    const t = JSON.parse(c);
    console.log(`k->${c}`);
    return t;
  } catch (error) {
    console.log(error);
  }
};

export default {};
