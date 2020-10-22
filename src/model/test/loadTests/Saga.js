import {put, call, takeEvery} from 'redux-saga/effects';
import * as actions from './Actions';
import * as actionTypes from '../../../utils/Constants';
import API from '../../QueryApi';

function* getTests(action) {
  try {
    const response = yield call(API.get, `/all-tests/${action.payload.id}/`);
    yield put(actions.getTestSuccess(response));
  } catch (e) {
    console.log(e);
    yield put(actions.getTestFailure(e));
  }
}

function* getTestsSaga() {
  yield takeEvery(actionTypes.GET_TEST_RESPONSE, getTests);
}

export {getTestsSaga};
