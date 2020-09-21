import axios from '../../config/Config.js';

class AddPatient {
  async processAddPatient(patientData, userId) {
    try {
      const responseResult = await axios.post(
        `add-patient/${userId}`,
        patientData,
      );
      if (!responseResult.status === 200) {
        console.log('Failed to save');
        return;
      }
      return await responseResult.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new AddPatient();
