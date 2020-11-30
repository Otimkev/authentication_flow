import {put, call, takeEvery, takeLatest} from 'redux-saga/effects';
import * as actions from './Actions';
import * as actionTypes from '../../../utils/Constants';
import API from '../../QueryApi';

function* getCategoryTests(action) {
  try {
    const result = yield call(API.get, `/patient/category/${action.payload}`);
    yield put(actions.getTestCategoriesSuccess(result));
  } catch (e) {
    console.log(e);
    yield put(actions.getTestCategoriesFailure(e));
  }
}

function* getCategoryTestsSaga() {
  yield takeLatest(
    actionTypes.GET_ALL_CATEGORY_TEST_RESPONSE,
    getCategoryTests,
  );
}

export {getCategoryTestsSaga};
