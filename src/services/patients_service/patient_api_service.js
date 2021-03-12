import axios from 'axios';
import {API_URL} from '../../utils/config';

export const index_patients = async () => {
  const response = await axios.get(`${API_URL}patients/${1}/${1}/`);
  return response.data;
};

export const get_a_patient = async ({patient_id}) => {
  console.log(patient_id);
  const response = await axios.get(`${API_URL}patient/${patient_id}/`);
  return response.data;
};

export const register_patient = async ({patient_data, user_id}) => {
  console.log(patient_data);
  const response = await axios.post(`${API_URL}/add-patient/${user_id}`);
  return response.data;
};

export default {};
