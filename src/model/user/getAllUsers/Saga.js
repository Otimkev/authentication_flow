import {put, call, takeEvery} from 'redux-saga/effects';
import * as actionTypes from './Actions';
import {GET_USER_RESPONSE} from '../../../utils/Constants';
import API from '../../QueryApi';
import * as actionCreators from './Actions';

function* fetchAllUsers(actions) {
  try {
    const vUsers = yield call(API.get, '/api/all-users/');
    yield put(actionCreators.getUsersSuccess(vUsers));
  } catch (e) {
    console.log(e);
    yield put(actionCreators.getUsersFailure(e));
  }
}

function* fetchAllUsersSaga() {
  yield takeEvery(GET_USER_RESPONSE, fetchAllUsers);
}

export {fetchAllUsersSaga};
