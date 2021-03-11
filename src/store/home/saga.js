import {put, takeEvery, all, call} from 'redux-saga/effects';
import * as types from './action_types';
import * as actions from './actions';

import * as api from '../../services/api';

function* index_specialists_Saga(action) {
  try {
    const user = yield call(api.index_specialists);
    yield put(actions.index_speciaists_success(user));
  } catch (error) {
    yield put(actions.index_speciaists_failure(error));
  }
}

function* watch_index_specialists_Saga() {
  yield takeEvery(types.GET_SPECIALISTS, index_specialists_Saga);
}

export default watch_index_specialists_Saga;
