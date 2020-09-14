import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:5449/api/v1/',
});
