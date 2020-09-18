import axios from '../../config/Config';

class GetAllPatients {
  async processGetAllPatients(userId) {
    try {
      const responseResult = await axios.get(`all-patient/${userId}/`);
      if (!responseResult.status === 200) {
        console.log('Failed to get all patients');
      }
      return responseResult.data.result;
    } catch (error) {
      console.log(error);
      return;
    }
  }
}

export default new GetAllPatients();
