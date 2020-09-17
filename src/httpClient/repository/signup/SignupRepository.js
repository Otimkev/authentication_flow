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
    try {
      const responseResult = await axios.post('signup/', {
        firstName: postData.firstName,
        lastName: postData.lastName,
        email: postData.email,
        phoneNumber: postData.phoneNumber,
        password: postData.password,
        facility: postData.facility,
      });
      if (!responseResult.status === 200) {
        this.loadingData.length = 0;
        this.loadingData.push(false);
        return responseResult.data;
      }
      this.loadingData.length = 0;
      this.loadingData.push(true);

      const result = responseResult.data;
      const status = responseResult.status;
      const {token} = result;
      console.log(`This is the user data ${result}`);
      const {id, lastName, firstName, email, phoneNumber, facility} = result;
      const mData = {
        userId: id,
        userName: `${firstName} ${lastName}`,
        email: email,
        phoneNumber: phoneNumber,
        facility: facility,
        token_key: token,
      };
      await auth.onValueChange('user', mData);
      return {token: token, status: status};
    } catch (error) {
      this.loadingData.length = 0;
      this.loadingData.push(false);
      console.log(error);
    }
  }
}
export default new SignupRepository();
