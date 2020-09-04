import axios from '../../config/Config.js';
import PatientsModel from '../../models/PatientsModel.js';

class AddPatient {
  async processAddPatient() {
    //const patient = this.initializeModel(patientBio);
    try {
      const responseResult = await axios.post('patient/add/', {
        firstName: 'mangoes',
        lastName: 'lastName',
        sex: 'male',
        age: 34,
        nationality: 'ugandan',
        religion: 'christian',
        maritalStatus: 'single',
        address: 'kampala',
        email: 'mangoes@gmail.com',
        weight: 67,
      });
      if (!responseResult.status === 200) {
        console.log('Failed to save');
        return;
      }
      return responseResult.data;
    } catch (error) {
      console.log(error);
      return;
    }
  }

  initializeModel(patientData) {
    const patient = new PatientsModel(
      patientData.firstName,
      patientData.lastName,
      patientData.sex,
      patientData.nationality,
      patientData.religion,
      patientData.maritalstatus,
      patientData.address,
      patientData.email,
      patientData.weight,
      patientData.age,
    );
    return patient;
  }
}
export default new AddPatient();
