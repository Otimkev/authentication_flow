import * as types from '../../../utils/Constants';

export const gotUsers = (users) => ({type: types.GOT_USERS, users});
export const gotNewUser = (user) => ({type: types.GOT_NEW_USER, user});
