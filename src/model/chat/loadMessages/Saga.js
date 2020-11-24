import {put, call, takeEvery} from 'redux-saga/effects';
import * as actionCreators from './Actions';
import * as actionTypes from '../../../utils/Constants';
import API from '../../QueryApi';

function* getChatRoomMessages(actions) {
  try {
    const messages = yield call(API.get, `/chat/${actions.payload}/room/`);
    yield put(actionCreators.gotMessagesSuccess(messages));
  } catch (e) {
    console.log(e);
    //yield put(actionCreators.gotMessagesFailure(e));
  }
}

function* getChatRoomMessagesSaga() {
  yield takeEvery(actionTypes.GOT_MESSAGES_RESPONSE, getChatRoomMessages);
}

export {getChatRoomMessagesSaga};
