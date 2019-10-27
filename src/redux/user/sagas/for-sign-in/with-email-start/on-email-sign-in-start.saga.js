import {takeLatest} from 'redux-saga/effects';
import UserActionTypes from '../../../types/user.types';
import {asyncSignInWithEmail} from './async-sign-with-email.saga'

export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, asyncSignInWithEmail);
}

