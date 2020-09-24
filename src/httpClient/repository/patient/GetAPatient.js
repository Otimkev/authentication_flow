import axios from '../../config/Config';

class GetAPatient {
  async processGetAPatients(patientId) {
    try {
      const responseResult = await axios.get(`patient/${patientId}/`);
      if (!responseResult.status === 200) {
        console.log('Failed to get a patients');
      }
      return responseResult.data;
    } catch (error) {
      console.log(error);
    }
  }

  async processGetAPatientTests(patientId) {
    try {
      const responseResult = await axios.get(`all-tests/${patientId}/`);
      if (!responseResult.status === 200) {
        console.log('Failed to get a patients');
      }
      let mArray = [];
      responseResult.data.forEach((test) => {
        mArray.push(test.labTestRecord);
      });
      return mArray;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new GetAPatient();
