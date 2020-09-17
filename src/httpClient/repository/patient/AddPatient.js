import axios from '../../config/Config.js';
import PatientsModel from '../../models/PatientsModel.js';

class AddPatient {
  async processAddPatient(patientData) {
    try {
      const responseResult = await axios.post('patient/add/', patientData);
      if (!responseResult.status === 200) {
        console.log('Failed to save');
        return;
      }
      const result = await responseResult.data;
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      return;
    }
  }
}

export default new AddPatient();
