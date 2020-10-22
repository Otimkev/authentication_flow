import {put, call, takeEvery} from 'redux-saga/effects';
import * as actions from './Actions';
import * as actionTypes from '../../../utils/Constants';
import API from '../../QueryApi';

function* addTest(action) {
  try {
    const response = yield call(
      API.post,
      `/add-test/${action.payload.id}/`,
      action.payload.data,
    );
    console.log(response);
    yield put(actions.addTestSuccess(response));
  } catch (e) {
    console.log(e);
    yield put(actions.addTestFailure(e));
  }
}

function* addTestSaga() {
  yield takeEvery(actionTypes.ADD_TEST_RESPONSE, addTest);
}

export {addTestSaga};
