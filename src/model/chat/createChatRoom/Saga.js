import {put, call, takeEvery} from 'redux-saga/effects';
import * as actions from './Actions';
import * as actionTypes from '../../../utils/Constants';
import API from '../../QueryApi';
import AsyncStorage from '@react-native-community/async-storage';

function* createChatRoom(action) {
  try {
    const userData = yield AsyncStorage.getItem('user');
    const data = JSON.parse(userData);
    const response = yield call(
      API.post,
      `/chat/initiate/${data.result.id}/`,
      action.payload,
    );
    yield put(actions.createChatRoomSuccess(response));
  } catch (e) {
    console.log(e);
    yield put(actions.createChatRoomFailure(e));
  }
}

function* createChatRoomSaga() {
  yield takeEvery(actionTypes.CREATE_CHAT_ROOM_RESONSE, createChatRoom);
}

export {createChatRoomSaga};
