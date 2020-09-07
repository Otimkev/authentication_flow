import axios from '../../config/Config.js';
import auth from '../../../navigation/SampleAuth.js';

class SignupRepository {
  loadingData = [];

  isLoading() {
    console.log(`isLoading state ${this.loadingData}`);
    return this.loadingData;
  }

  async postSignupData(postData) {
    this.loadingData.length = 0;
    this.loadingData.push(false);
    const {firstName, lastName, email, phone, password, facility} = postData;
    try {
      const responseResult = await axios.post('user/signup/', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        password: password,
        facility: facility,
      });
      if (!responseResult.status === 200) {
        this.loadingData.length = 0;
        this.loadingData.push(false);
        return responseResult.data;
      }
      this.loadingData.length = 0;
      this.loadingData.push(true);

      const jwtToken = responseResult.data;
      const {token, result} = jwtToken;

      return await auth.onValueChange('token_key', token);
    } catch (error) {
      this.loadingData.length = 0;
      this.loadingData.push(false);
      console.log(error);
    }
  }
}
export default new SignupRepository();
