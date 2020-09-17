import axios from '../../config/Config.js';
import auth from '../../../navigation/SampleAuth.js';

class LoginRepository {
  async postSigninData(postData) {
    try {
      const responseResult = await axios.post('user/signin/', postData);
      const status = responseResult.status;
      const {token, result} = responseResult.data;
      await auth.onValueChange('token_key', token);
      console.log(status);
      console.log(result);
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
