import axios from '../../config/Config';

class GetAllPatients {
  async processGetAllPatients() {
    try {
      const allPatients = await axios.get('/all-patients/');
      return allPatients.data;
    } catch (error) {
      console.log(error);
      return;
    }
  }
}

export default GetAllPatients;
