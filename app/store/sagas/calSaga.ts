import { put } from 'redux-saga/effects';

import { Alert } from 'react-native';
import * as calActions from 'app/store/actions/calActions';

export default function* loginAsync(actions) {
  console.log(actions.data);
  let answer = eval(actions.data).toString();
  yield put(calActions.updateCalValue(answer));
}
