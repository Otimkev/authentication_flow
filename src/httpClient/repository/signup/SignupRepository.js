import axios from '../../config/Config.js';
import auth from '../../utils/SampleAuth.js';

class SignupRepository {
  loadingData = [];

  isLoading() {
    console.log(`isLoading state ${this.loadingData}`);
    return this.loadingData;
  }

  async postSignupData(postData) {
    try {
      const responseResult = await axios.post('signup/', {
        firstName: postData.firstName,
        lastName: postData.lastName,
        email: postData.email,
        phoneNumber: postData.phoneNumber,
        password: postData.password,
        facility: postData.facility,
      });
      const status = responseResult.status;
      const {token, result} = responseResult.data;
      const {id, lastName, firstName, email, phoneNumber, facility} = result;
      const mData = {
        userId: id,
        userName: `${firstName} ${lastName}`,
        email: email,
        phoneNumber: phoneNumber,
        facility: facility,
        token_key: token,
      };
      await auth.onValueChange('user', JSON.stringify(mData));
      return {token: token, status: status, result: result};
    } catch (error) {
      console.log(error);
    }
  }
}
export default new SignupRepository();
