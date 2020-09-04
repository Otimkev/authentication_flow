import axios from '../../config/Config.js';

class LoginRepository {
  async postSigninData(postData) {
    try {
      const responseResult = await axios.post('user/login/', postData);
      return console.log(responseResult.data);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new LoginRepository();
