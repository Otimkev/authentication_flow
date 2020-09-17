import axios from '../../config/Config.js';
import auth from '../../../navigation/SampleAuth.js';

class LoginRepository {
  async postSigninData(postData) {
    try {
      const responseResult = await axios.post('/signin/', postData);
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

      return {
        token: token,
        status: status,
        result: result,
      };
    } catch (error) {
      console.log(error);
    }
  }
}

export default new LoginRepository();
