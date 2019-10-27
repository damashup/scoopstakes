import {takeLatest} from 'redux-saga/effects';
import UserActionTypes from '../../types/user.types';
import {asyncFetchSignInProviders} from './async-fetch-sign-in-providers';

export function* onFetchSignInProviders(){
    yield takeLatest(UserActionTypes.FETCH_SIGN_IN_PROVIDERS_START, asyncFetchSignInProviders);
}