import AsyncStorage from '@react-native-community/async-storage';
import {put, call, takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../../../utils/Constants';
import {storeToken} from '../../../utils/SessionManager';
import API from '../../QueryApi';
import * as actionCreators from './Actions';

function* RegisterSaga(action) {
  try {
    const signupResponse = yield call(API.post, '/signup/', action.payload);
    console.log(action.payload);
    console.log(signupResponse);
    yield call(storeToken, JSON.stringify(signupResponse));
  } catch (e) {
    console.log(e);
    yield put(actionCreators.inviteFailure(e));
  }
}

function* signupSaga() {
  yield takeEvery(actionTypes.SIGNUP_RESONSE, RegisterSaga);
}

export {signupSaga};
