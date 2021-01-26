import {put, call, takeEvery} from 'redux-saga/effects';
import * as actions from './Actions';
import * as actionTypes from '../../../utils/Constants';
import API from '../../QueryApi';

function* fetchAllTestCategories() {
  try {
    const testCategories = yield call(API.get, '/api/categories/');
    yield put(actions.getAllTestCategory(testCategories));
  } catch (e) {
    console.log(e);
    yield put(actions.getAllTestCategoryFailure(e));
  }
}

function* fetchAllTestCategoriesSaga() {
  yield takeEvery(
    actionTypes.GET_ALL_TEST_CATEGORIES_SUCESS,
    fetchAllTestCategories,
  );
}

export {fetchAllTestCategoriesSaga};
