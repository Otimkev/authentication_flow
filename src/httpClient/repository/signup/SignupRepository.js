import axios from '../../config/Config.js';

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
      const responseResult = await axios.post('user/signup/', postData);
      if (!responseResult.status === 200) {
        this.loadingData.length = 0;
        this.loadingData.push(false);
        return responseResult.status;
      }
      this.loadingData.length = 0;
      this.loadingData.push(true);
      return console.log(responseResult.data);
    } catch (error) {
      this.loadingData.length = 0;
      this.loadingData.push(false);
      console.log(error);
    }
  }
}
export default new SignupRepository();
