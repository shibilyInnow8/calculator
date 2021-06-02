/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import calSaga from './calSaga';

export default function* watch() {
  yield all([takeEvery(types.CALCULATE, calSaga)]);
}
