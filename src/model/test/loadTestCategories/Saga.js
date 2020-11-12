import {put, call, takeEvery} from 'redux-saga/effects';
import * as actions from './Actions';
import * as actionTypes from '../../../utils/Constants';
import API from '../../QueryApi';

function* getTestCategories(action) {
  try {
    const response = yield call(
      API.get,
      `/user/get-category/${action.payload}/`,
    );
    console.log(response);
    yield put(actions.getTestCategorySuccess(response));
  } catch (e) {
    console.log(e);
    yield put(actions.getTestCategoryFailure(e));
  }
}

function* getTestCategorySaga() {
  yield takeEvery(actionTypes.GET_CATEGORY_RESONSE, getTestCategories);
}

export {getTestCategorySaga};
