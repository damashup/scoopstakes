import {takeLatest} from 'redux-saga/effects';
import UserActionTypes from '../../types/user.types';

import {asyncFetchSnapshotFromUserAuth} from '../helper/async-fetch-snapshot-from-user';

export function* signInAfterSignUp({payload: {user, additionalData}}){
    yield asyncFetchSnapshotFromUserAuth(user, additionalData);
}

export function* onSignUpSuccess(){
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

