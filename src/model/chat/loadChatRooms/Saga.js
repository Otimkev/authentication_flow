import {put, call, takeEvery} from 'redux-saga/effects';
import * as actions from './Actions';
import * as actionTypes from '../../../utils/Constants';
import API from '../../QueryApi';
import AsyncStorage from '@react-native-community/async-storage';

function* fetchChatRooms() {
  try {
    const userData = yield AsyncStorage.getItem('user');
    const data = JSON.parse(userData);
    const chatRooms = yield call(API.get, `/api/chat-head/${data.id}/`);
    console.log(chatRooms);
    yield put(actions.getChatRoomsSuccess(chatRooms));
  } catch (e) {
    console.log(e);
    yield put(actions.getChatRoomsFailure(e));
  }
}

function* fetchChatRoomsSaga() {
  yield takeEvery(actionTypes.GET_CHAT_ROOM_RESONSE, fetchChatRooms);
}

export {fetchChatRoomsSaga};
