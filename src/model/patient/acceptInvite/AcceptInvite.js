import axios from 'axios';
import {API_URL} from '../../../utils/config/Urls';

export const acceptInvitation = async (inviteData) => {
  const {isAccepted, shareId} = inviteData;
  try {
    const result = await axios.post(`${API_URL}user/accept-invite/`, {
      isAccepted,
      shareId,
    });
    return result.status;
  } catch (error) {
    console.log(error);
  }
};
