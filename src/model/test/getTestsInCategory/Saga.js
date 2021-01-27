import {put, call, takeEvery, takeLatest} from 'redux-saga/effects';
import * as actions from './Actions';
import * as actionTypes from '../../../utils/Constants';
import API from '../../QueryApi';

function* getTestsInCategoryTests(action) {
  try {
    const result = yield call(API.get, `/api/categories/${action.payload}`);
    yield put(actions.getTestInCategoriesSuccess(result));
    console.log(result);
  } catch (e) {
    console.log(e);
    yield put(actions.getTestInCategoriesFailure(e));
  }
}

function* getTestsInCategorySaga() {
  yield takeLatest(
    actionTypes.GET_TESTS_IN_CATEGORY_RESONSE,
    getTestsInCategoryTests,
  );
}

export {getTestsInCategorySaga};
